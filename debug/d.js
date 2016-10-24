var colors = require('colors');
colors.setTheme({
    logname: 'blue',
    costtime: 'green'
});
console.log('home'.logname);
console.log('home'.costtime);
module.exports = function debug(namespace) {

}
require('debug')('home')('aaa');