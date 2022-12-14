import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ZoHo Invoice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav />
        <h1>ZoHo Invoice</h1>
      </div>
    </div>
  );
};

export default Home;
