import Footer from "./Footer";
import Navbar from "./NavBar";
import Head from "next/head";



export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/images/favicon.ico" />
        <title>Pokedex da Shopee</title>
      </Head>

      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
