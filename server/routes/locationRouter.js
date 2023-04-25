const Router = require('express');
const router = new Router();
const locationController = require('../controllers/locationController');

router.post('/', locationController.create);
router.get('/', locationController.getAll);
// router.get('/:id');
router.delete('/', locationController.delete);

module.exports = router;