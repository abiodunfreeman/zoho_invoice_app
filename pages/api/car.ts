import mongoose from 'mongoose';
import colors from 'colors';
import dbConnect from '../../LIB/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';
const Car = require('../../models/car');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const cars = await Car.find();
      res.status(200).json({ success: true, cars });
    } catch (err) {
      res.status(400).json({ success: false, err: err });
    }
  } else if (req.method === 'POST') {
    try {
      const newCar = await Car.create({
        brand: req.body.brand,
        model: req.body.model,
        owner: req.body.owner,
      });
      res.status(200).json({ success: true, data: newCar });
    } catch (err) {
      console.log(`${err}`);
      res.status(200).json({ success: false, err: err });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedCar = await Car.findByIdAndDelete(req.body.id);
      console.log(req.body);
      console.log(deletedCar);
      res.status(200).json({ success: true, deletedCar });
    } catch (err) {
      console.log(`${err}`);
      res.status(200).json({ success: false, err: err });
    }
  } else {
    res.status(400).json({ success: false });
  }
  // res.status(200).json({ brand: 'Mercedes', model: 'X1', url: 'url.com' });
}
