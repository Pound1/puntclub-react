import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/client";
import { useRouter } from "next/router";

//CSS
import { HeaderStyles } from "../styles/header";

//Buttons
import Button from "./Button";

//Nav Boxes
import LinkBox from "./LinkBox";

export default function Header() {
  const router = useRouter();
  const [session] = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <section className="header">
      <HeaderStyles />
      <div className="headerBackgroundColor">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headerNav">
                <div className="puntClubLogo">
                  <img src="./images/slash.png" alt="Punt Club Home" />
                  <h1>PUNT.CLUB</h1>
                </div>
                <div className="loginContainer">
                  {session && (
                    <Link href="/">
                      <a href="#" onClick={handleSignout} className="loginLink">
                        Sign out
                      </a>
                    </Link>
                  )}
                  {!session && (
                    <>
                      <Link href="/">
                        <a
                          href="#"
                          onClick={handleSignin}
                          className="loginLink"
                        >
                          Login
                        </a>
                      </Link>
                      <div href="#" onClick={handleSignin}>
                        <Button text={"Join Us"} url={"#"} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <LinkBox
              text={"Betting"}
              icon={"football-ball"}
              route={router.pathname == "/" ? true : false}
            />
          </div>
          <div className="col-md-3">
            <LinkBox
              text={"Clubs"}
              icon={"users"}
              route={router.pathname == "betting" ? true : false}
            />
          </div>
          <div className="col-md-3">
            <LinkBox
              text={"My Account"}
              icon={"tools"}
              route={router.pathname == "betting" ? true : false}
            />
          </div>
          <div className="col-md-3">
            <LinkBox
              text={"Betting"}
              icon={"football-ball"}
              route={router.pathname == "betting" ? true : false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
