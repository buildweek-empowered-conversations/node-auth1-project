const bcrypt = require('bcryptjs');

const Users = require('../users/user-model');
const db =require('../data/dbConfig.js');


module.exports = function restricted(req,res,next){
 
     const {username, password}= req.headers;
      console.log(username)
     Users.findBy({username})
     .first()
     .then(user => {
         if(user && bcrypt.compareSync(password, user.password)){
             console.log('Success')
             next();
         }else{
             res.status(401).json({message: 'You Shall Not Pass!'})
         }
         })
         .catch(err => {
             res.status(500).json(err)
         })
     }




 