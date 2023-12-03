var express = require('express');
var router = express.Router();
var Usercontroller=require('../controllers/Usercontroller')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/register',Usercontroller.register)
router.post('/login',Usercontroller.login)

module.exports = router;
