const Router = require('express');
const router = new Router();
const QuestionController = require('../controllers/questionController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), QuestionController.create);
router.get('/', checkRole('ADMIN'), QuestionController.getAll);
// router.get('/:id');
router.delete('/', QuestionController.delete);

module.exports = router;