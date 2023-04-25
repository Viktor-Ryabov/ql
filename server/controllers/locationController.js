const {Location} = require('../models/models');
const ApiError = require('../error/ApiError');

class LocationController {
    async create(req, res) {
        const {name} = req.body
        const location = await Location.create({name})
        return res.json(type)
    }
    async getAll(req, res) {}
    async delete(req, res) {}
}

module.exports = new LocationController();