import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div>
      <main>
        <div>
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
      </main>
    </div>
  );
}
