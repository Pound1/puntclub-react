import query from '../../lib/db'
import prepare from 'sql-template-strings'

export default async (req, res) => {
  if (req.method !== 'POST') {
    if (process.env.DEBUG >= 1) {
      console.log('[DEBUG] Pending Bets Lookup: Request must be POST')
    }
    res.statusCode = 405
    res.send('Method Not Allowed')
    return
  }

  //Get all pending bets
  let pendingBetsLookup = {}
  pendingBetsLookup = await query(prepare`SELECT * FROM bets WHERE Result = 'pending'`)
  //return results
  res.statusCode = 200
  res.json({
    response: {
      boolean: true,
      alert: '',
      message: '',
    },
    payload: pendingBetsLookup.data,
  })

  return
}
