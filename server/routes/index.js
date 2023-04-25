const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const locationRouter = require('./locationRouter');
const questionRouter = require('./questionRouter');


router.use('/user', userRouter);
router.use('/location', locationRouter);
router.use('/question', questionRouter);

module.exports = router;