const Router = require('express');
const router = new Router();
const QuestionController = require('../controllers/questionController')

router.post('/', QuestionController.create);
router.get('/', QuestionController.getAll);
// router.get('/:id');
router.delete('/', QuestionController.delete);

module.exports = router;