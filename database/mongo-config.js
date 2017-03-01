//USER: admin PASS: admin
module.exports.url = 'mongodb://admin:admin@ds113678.mlab.com:13678/footscores';
module.exports.user = 'admin';
module.exports.password = 'admin';
module.exports.setConfig = function() {
  process.env.MONGOOSE_CONNECT = 'mongodb://admin:admin@ds113678.mlab.com:13678/footscores';
};
