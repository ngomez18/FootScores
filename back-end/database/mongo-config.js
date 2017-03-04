//USER: admin PASS: admin
module.exports.url = 'mongodb://admin:admin@ds117830.mlab.com:17830/footscores';
module.exports.user = 'admin';
module.exports.password = 'admin';
module.exports.setConfig = function() {
  process.env.MONGOOSE_CONNECT = module.exports.url;
};
