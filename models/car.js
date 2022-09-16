import mongoose from 'mongoose';
const CarSchema = mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'please add a brand'],
  },
  model: String,
  owner: String,
});
module.exports = mongoose.models.Car || mongoose.model('Car', CarSchema);
