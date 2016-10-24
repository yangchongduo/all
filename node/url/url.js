const url=require('url');
const string='http://api.sense.letv.cn/backend-sense-ticket/v1';
const result=url.parse(string)
console.log(result)
/**
 Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'api.sense.letv.cn',
  port: null,
  hostname: 'api.sense.letv.cn',
  hash: null,
  search: null, // ？ 之后的东西
  query: null, // 如果加true
  pathname: '/backend-sense-ticket/v1',
  path: '/backend-sense-ticket/v1', // 域名之后的部分
  href: 'http://api.sense.letv.cn/backend-sense-ticket/v1' }
*/