import mongoose from 'mongoose';
import colors from 'colors';
import type { NextApiRequest, NextApiResponse } from 'next';
async function connectDB() {
  const conn = await mongoose.connect(
    'mongodb+srv://bornduringwar:zoho_db>@dev.no2j5qh.mongodb.net/?retryWrites=true&w=majority'
  );
  console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline.bold);
}
connectDB();
type Data = {
  brand: string;
  model: string;
  url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ brand: 'Mercedes', model: 'X1', url: 'url.com' });
}
