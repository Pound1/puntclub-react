import { useSession } from 'next-auth/client'
import Headline from '../components/Headline'
import PendingBets from '../components/PendingBets'
import axios from 'axios'

function Home({ pendingBetData }) {
  const [session, loading] = useSession()

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Headline text={'PENDING BETS'} />
            <PendingBets data={pendingBetData} />
            {loading && <div>Loading...</div>}
            {session && (
              <>
                <p>Welcome, {session.user.nickname}</p>
                <br />
                <img src={session.user.image} alt="" />
              </>
            )}
            {!session && (
              <>
                <p>Please Sign in</p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

Home.getInitialProps = async (ctx) => {
  const response = await axios
    .post('http://localhost:3000/api/pending', {})
    .then((res) => {
      //pass response to UI
      if (res.data.response.boolean) {
        console.log(res.data.payload)
        return {
          responseMessage: '1',
          responseAlert: '2',
          pendingBetData: res.data.payload,
        }
      } else {
        return {
          responseMessage: res.data.response.message,
          responseAlert: res.data.response.alert,
          pendingBetData: res.data.payload,
        }
      }
    })
    .catch((e) => {
      return {
        responseMessage: 'Something went wrong, please try again',
        responseAlert: 'danger',
        doctorData: {},
      }
    })

  return response
}

export default Home
