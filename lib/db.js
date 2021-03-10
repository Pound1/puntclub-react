import mysql from 'serverless-mysql'

//initialise shared database connection
const db = mysql({
  config: {
    host: process.env.DB_HOST,
    database: process.env.DB_SCHEMA,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
})
if (process.env.DEBUG == 2) {
  console.log('[DEBUG] Connecting to DB', db)
}

/**
 * Database query handler
 *
 * @export
 * @param {obj} statement Prepared query string
 * @return {obj}
 */
export default async function query(statement) {
  if (process.env.DEBUG == 2) {
    console.log('Running DB query', statement)
  }

  //set the standard return object
  let returnObj = {
    response: {
      boolean: false,
      alert: 'danger',
      message: 'Your database query failed',
    },
    data: {},
  }

  //make sure the query statement is set
  if (!statement) {
    if (process.env.DEBUG >= 1) {
      console.log('[DEBUG] DB query failed: statement not set')
    }

    returnObj.response.message = 'You must specify a prepared statement when querying the database'
    return returnObj
  }

  try {
    //run query
    let result = await db.query(statement)

    //convert result object into plain data
    result = JSON.parse(JSON.stringify(result))

    //wait for query response
    await db.end()

    //return results
    returnObj.response.boolean = true
    returnObj.response.alert = 'success'
    returnObj.response.message = 'Your database query succeeded'
    returnObj.data = result
    return returnObj
  } catch (error) {
    if (process.env.DEBUG >= 1) {
      console.log('[DEBUG] DB query failed: ', error)
    }

    //convert error object into plain data
    error = JSON.parse(JSON.stringify(error))

    //return error
    returnObj.data = error
    return returnObj
  }
}
