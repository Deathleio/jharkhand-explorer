import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  history: { type: String, required: true },
  images: [{ type: String, required: true }],
  category: { type: String, required: true },
  location: {
    address: String,
    googleMapsUrl: String, // <<< Add this line
  },
}, { timestamps: true });

const Place = mongoose.model('Place', placeSchema);
export default Place;