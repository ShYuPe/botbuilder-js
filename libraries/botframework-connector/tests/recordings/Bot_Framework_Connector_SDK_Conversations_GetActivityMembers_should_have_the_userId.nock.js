// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['USER_ID'] = 'UK8CH2281:TKGSUQHQE';
  process.env['BOT_ID'] = 'BKGSYSTFG:TKGSUQHQE';
  process.env['HOST_URL'] = 'https://slack.botframework.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0389857f-2464-451b-ac83-5f54d565b1a7';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .post('/v3/conversations', {"bot":{"id":"BKGSYSTFG:TKGSUQHQE"},"members":[{"id":"UK8CH2281:TKGSUQHQE"}],"activity":{"type":"message","from":{"id":"BKGSYSTFG:TKGSUQHQE"},"recipient":{"id":"UK8CH2281:TKGSUQHQE"},"text":"test activity"}})
  .reply(200, {"activityId":"1560554379.003500","id":"BKGSYSTFG:TKGSUQHQE:DKE8NUG92"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '83',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|4e814763ab7fad4a919c16a36cecee6b.1e8cf22f_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:38 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .get('/v3/conversations/BKGSYSTFG%3ATKGSUQHQE%3ADKE8NUG92/activities/1560554379.003500/members')
  .reply(200, [{"id":"BKGSYSTFG:TKGSUQHQE","name":"vmicricbot"},{"id":"UK8CH2281:TKGSUQHQE","name":"v-micric"}], [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '143',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|a1fd6105757aef4f95a125f652fd1183.1e8cf231_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:39 GMT',
  'Connection',
  'close' ]);
 return result; }]];