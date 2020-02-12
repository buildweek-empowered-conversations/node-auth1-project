const router = require('express').Router();

const usersRouter = require('../users/user-router');
const authRouter = require('../auth/auth-router');


router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "Here's Johnny!" });
});

module.exports = router;
