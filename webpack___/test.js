var moment = require('moment');
moment.locale('zh-cn');
console.log(moment(new Date(Date.now() - 1000*60*5)).fromNow());