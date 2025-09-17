import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/users/register
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    
    // Check if the user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400); // Bad Request
        throw new Error('User already exists');
    }

    // Create the new user in the database
    // The password will be automatically hashed by the middleware in the User model
    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        // If user was created successfully, send back their data and a token
        res.status(201).json({ // 201 Created
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
};

// @desc    Auth user & get token (Login)
// @route   POST /api/users/login
const loginUser = async (req, r