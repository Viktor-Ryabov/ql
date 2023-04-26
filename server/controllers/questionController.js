const {Question} = require('../models/models');
const ApiError = require('../error/ApiError');

class QuestionController {
    async create(req, res) {
        const {name, description} = req.body;
        const question = await Question.create({name, description});
        return res.json(question);
    }
    async getAll(req, res) {
        const questions = await Question.findAll();
        return res.json(questions);
    }
    async delete(req, res) {}
}

module.exports = new QuestionController();
