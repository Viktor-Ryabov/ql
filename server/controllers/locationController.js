const {Location} = require('../models/models');
const ApiError = require('../error/ApiError');

class LocationController {
    async create(req, res) {
        const {name, description, image} = req.body
        const location = await Location.create({name, description, image })
        return res.json(location)
    }
    async getAll(req, res) {
        const locations = await Location.findAll();
        return res.json(locations);
    }
    async delete(req, res) {}
}

module.exports = new LocationController();