import { withSession } from "next-auth/client";

class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div>
            {loading && <div>Loading...</div>}
            {session && (
              <>
                <p>Welcome, {this.props.session.user.nickname}</p>
                <br />
                <img src={this.props.session.user.image} alt="" />
              </>
            )}
            {!session && (
              <>
                <p>Please Sign in</p>
              </>
            )}
          </div>
        </main>
      </div>
    );
  }
}
export default withSession(Home);
