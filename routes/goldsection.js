var express = require('express');
var router = express.Router();
const goldmember = 
/* GET gold member page */
router.get('/', function(req, res, next) {if (req.userContext) {
    const userId = req.userContext.userinfo.sub
  res.render('goldsection.pug', { title: 'Gold Member Page', user: req.userContext, userId: userId, lastName: lastName, });
  } else {
   res.render('login.pug', { title: 'Okta Zillow' })
   
  }
});


module.exports = router;
