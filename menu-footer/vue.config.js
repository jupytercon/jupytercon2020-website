const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': path.join(__dirname, '../assets'),
                '~assets': path.join(__dirname, '../assets'),
            }
        }
    }
};
