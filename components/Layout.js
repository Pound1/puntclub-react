import Head from "next/head";
import Header from "./Header";

//Styles
//import { LayoutStyles } from "../styles/components/layout";

const Layout = (layoutProps) => (
  <div className="Layout">
    <Head>
      <title>Punt Club</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <div className="Content">{layoutProps.children}</div>
  </div>
);

export default Layout;
