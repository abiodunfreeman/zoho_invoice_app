// @ts-nocheck
import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../../components/Nav';
import axios from 'axios';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
const Home: NextPage = () => {
  const [carData, setCarData] = useState(false);
  const handleDelete = async id => {
    const res = await axios.post('/api/delete/car', { id: id });
    console.log(res.data);
    handleClick();
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const owner = document.getElementById('owner').value;
    const userInput = { brand, model, owner };
    console.log(userInput);
    const res = await axios.post('/api/car', { ...userInput });
    console.log(res.data);
    handleClick();
  };
  const handleClick = async (e: React.FormEvent) => {
    const res = await axios.get('/api/car');
    setCarData(prevData => {
      return res.data.cars.map(car => {
        return (
          <div className="border border-black m-4 p-4">
            <p>{car._id}</p>
            <Button variant="outlined" onClick={() => handleDelete(car._id)}>
              Delete Car
            </Button>
            <h1>{car.brand ? car.brand : 'no brand'}</h1>
          </div>
        );
      });
    });
    console.log(res.data);
  };

  return (
    <div>
      <div>
        <Nav />
        <div>
          <h1 className="text-center text-3xl extra-bold">Create Car</h1>
          <form
            className="flex flex-col max-w-sm p-4 gap-4"
            onSubmit={handleSubmit}
          >
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
            <TextField
              label="owner"
              placeholder="James, Abby, Tom..."
              id="owner"
              variant="outlined"
            />
            <Button variant="outlined" type="submit">
              Add Car
            </Button>
          </form>
          <Button variant="outlined" type="button" onClick={handleClick}>
            See Cars
          </Button>
        </div>
        <div className="text-2xl text-red-500">
          view cars
          <div className="flex gap-4 flex-wrap">{carData}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
