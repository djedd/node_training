const User = require('../models/User');
const myCache = require('../utils/cache');

const createUser = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    const cacheKey = 'allUsers';
    let users = myCache.get(cacheKey);

    if (users) {
        console.log("Returning from cache");
        return res.json(users);
    }

    try {
        users = await User.findAll();
        myCache.set(cacheKey, users);
        console.log("Returning from database and setting to cache");
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createUser, getAllUsers };
