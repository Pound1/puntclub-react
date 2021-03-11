import Header from "../components/Header";
import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div>
      <Header />
      <main>
        <div>
          {loading && <div>Loading...</div>}
          {session && (
            <>
              <p>Welcome, {session.user.hello}</p>
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
      </main>
    </div>
  );
}
