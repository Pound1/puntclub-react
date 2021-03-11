import Head from "next/head";
import NavBar from "./NavBar";

//Styles
//import { LayoutStyles } from "../styles/components/layout";

const Layout = (layoutProps) => (
  <div className="Layout">
    <Head>
      <title>Punt Club</title>
    </Head>
    <NavBar />
    <div className="Content">{layoutProps.children}</div>
  </div>
);

export default Layout;
