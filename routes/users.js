var express = require('express');
var router = express.Router();
var Usercontroller=require('../controllers/Usercontroller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register',Usercontroller.register)
router.post('/login',Usercontroller.login)

module.exports = router;
