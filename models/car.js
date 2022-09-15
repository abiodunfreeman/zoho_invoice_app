import mongoose from 'mongoose';
const CarSchema = mongoose.Schema({
  brand: String,
  model: String,
});
export default mongoose.model('Car', CarSchema);
