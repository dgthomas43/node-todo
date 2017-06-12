var configvalues = require('./config');

module.exports = {
    getDBConnectionString : function() {
        return 'mongodb://' + configvalues.username + ':'+ configvalues.pwd + '@ds123722.mlab.com:23722/nodetodo'
    }
}