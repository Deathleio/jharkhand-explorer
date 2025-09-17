import Place from '../models/Place.js';

const getPlaces = async (req, res) => {
  const places = await Place.find({});
  res.json(places);
};

const getPlaceById = async (req, res) => {
  const place = await Place.findById(req.params.id);
  if (place) {
    res.json(place);
  } else {
    res.status(404);
    throw new Error('Place not found');
  }
};

const createPlace = async (req, res) => {
    const { name, description, history, images, category, location } = req.body;
    const place = new Place({
        name, description, history, images, category, location
    });
    const createdPlace = await place.save();
    res.status(201).json(createdPlace);
};

// This is the new function added for updating a place
const updatePlace = async (req, res) => {
  const { name, description, history, images, category, location } = req.body;
  
  const place = await Place.findById(req.params.id);

  if (place) {
    place.name = name || place.name;
    place.description = description || place.description;
    place.history = history || place.history;
    place.images = images || place.images;
    place.category = category || place.category;
    place.location = location || place.location;

    const updatedPlace = await place.save();
    res.json(updatedPlace);
  } else {
    res.status(404);
    throw new Error('Place not found');
  }
};

// The export statement has been updated to include the new function
export { getPlaces, getPlaceById, createPlace, updatePlace };