var jwt = require('jsonwebtoken');
var secretKey = 'ngomezfmartinez';

module.exports.authenticate = function(req, res) {
  var user = {
    user: 'testUser',
    email: 'test@email.com'
  };
  var token = jwt.sign(user, secretKey, {
    expiresIn: 4000,
  });
  res.json({
    success: true,
    token: token
  });
};
