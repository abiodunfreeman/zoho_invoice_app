import mongoose from 'mongoose';
import colors from 'colors';
import dbConnect from '../../../LIB/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';
const Car = require('../../../models/car');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  console.log(req.body.id);
  try {
    const deletedCar = await Car.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, deletedCar });
  } catch (err) {
    res.status(200).json({ success: false, err });
  }

  // res.status(200).json({ brand: 'Mercedes', model: 'X1', url: 'url.com' });
}
