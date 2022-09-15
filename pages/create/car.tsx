import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../../components/Nav';
const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Nav />
        <div>
          <h1 className="text-center text-3xl extra-bold">Create Car</h1>
          <input placeholder="Mercedes" id="brand"></input>
        </div>
        <div className="text-2xl text-red-500">view cars</div>
      </div>
    </div>
  );
};

export default Home;
