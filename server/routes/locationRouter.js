const Router = require('express');
const router = new Router();
const locationController = require('../controllers/locationController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), locationController.create);
router.get('/', checkRole('ADMIN'), locationController.getAll);
// router.get('/:id');
router.delete('/', locationController.delete);

module.exports = router;