const router = require('express').Router();

const bcrypt = require('bcryptjs');
const restricted = require('../auth/restricted')
const Users = require('./user-model.js');

router.get('/', restricted, (req,res)=> {
    Users.find()
    .then(users=> {
        res.json(users)
    })
    .catch(err=> res.send(err))
})


module.exports = router;