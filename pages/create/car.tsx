import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../../components/Nav';
import { Button, TextField } from '@mui/material';
const Home: NextPage = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('f');
  };
  return (
    <div>
      <div>
        <Nav />
        <div>
          <h1 className="text-center text-3xl extra-bold">Create Car</h1>
          <form className="flex flex-col max-w-sm p-4" onSubmit={handleSubmit}>
            <TextField
              label="brand"
              placeholder="Mercedes"
              id="brand"
              variant="outlined"
            />
            <TextField
              label="model"
              placeholder="190D"
              id="model"
              variant="outlined"
            />
            <Button variant="outlined" type="submit">
              Add Car
            </Button>
          </form>
        </div>
        <div className="text-2xl text-red-500">view cars</div>
      </div>
    </div>
  );
};

export default Home;
