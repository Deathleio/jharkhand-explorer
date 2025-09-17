import Place from '../models/Place.js';

// ... (getPlaces, getPlaceById functions remain the same) ...

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

// --- THIS FUNCTION IS UPDATED ---
const createPlace = async (req, res) => {
  try {
    const { name, description, history, images, category, location } = req.body;

    const place = new Place({
        name, 
        description, 
        history, 
        images, 
        category, 
        location
    });

    const createdPlace = await place.save();
    res.status(201).json(createdPlace);

  } catch (error) {
    // This 'catch' block prevents the server from crashing
    console.error(error); // This logs the real error in your terminal
    res.status(400).json({ message: 'Invalid place data provided. Please check all fields.' });
  }
};

// ... (updatePlace function remains the same) ...

const updatePlace = async (req, res) => {
  const { name, description, history, images, category, location } = req.body;
  
  const place = await Place.findById(req.params.id);

  if (place) {
    place.name = name || place.name;
    place.description = description || place.description;
    place.history = history || place.history;
    place.images = images || place.images;
    place.category = category || place.category;
    
    if (location) {
      place.location = { ...place.location, ...location };
    }

    const updatedPlace = await place.save();
    res.json(updatedPlace);
  } else {
    res.status(404);
    throw new Error('Place not found');
  }
};

export { getPlaces, getPlaceById, createPlace, updatePlace };