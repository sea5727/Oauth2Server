var db = require('../../db');
var jwt = require('jsonwebtoken');
var pem2jwk = require('pem-jwk').pem2jwk

var publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnzyis1ZjfNB0bBgKFMSv
vkTtwlvBsaJq7S5wA+kzeVOVpVWwkWdVha4s38XM/pa/yr47av7+z3VTmvDRyAHc
aT92whREFpLv9cj5lTeJSibyr/Mrm/YtjCZVWgaOYIhwrXwKLqPr/11inWsAkfIy
tvHWTxZYEcXLgAXFuUuaS3uF9gEiNQwzGTU1v0FqkqTBr4B8nW3HCN47XUu0t8Y0
e+lf4s4OxQawWD79J9/5d3Ry0vbV3Am1FtGJiJvOwRsIfVChDpYStTcHTCMqtvWb
V6L11BWkpzGXSW4Hv43qa+GSYOD2QU68Mb59oSk2OB+BtOLpJofmbGEGgvmwyCI9
MwIDAQAB
-----END PUBLIC KEY-----
`

var privatekey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAnzyis1ZjfNB0bBgKFMSvvkTtwlvBsaJq7S5wA+kzeVOVpVWw
kWdVha4s38XM/pa/yr47av7+z3VTmvDRyAHcaT92whREFpLv9cj5lTeJSibyr/Mr
m/YtjCZVWgaOYIhwrXwKLqPr/11inWsAkfIytvHWTxZYEcXLgAXFuUuaS3uF9gEi
NQwzGTU1v0FqkqTBr4B8nW3HCN47XUu0t8Y0e+lf4s4OxQawWD79J9/5d3Ry0vbV
3Am1FtGJiJvOwRsIfVChDpYStTcHTCMqtvWbV6L11BWkpzGXSW4Hv43qa+GSYOD2
QU68Mb59oSk2OB+BtOLpJofmbGEGgvmwyCI9MwIDAQABAoIBACiARq2wkltjtcjs
kFvZ7w1JAORHbEufEO1Eu27zOIlqbgyAcAl7q+/1bip4Z/x1IVES84/yTaM8p0go
amMhvgry/mS8vNi1BN2SAZEnb/7xSxbflb70bX9RHLJqKnp5GZe2jexw+wyXlwaM
+bclUCrh9e1ltH7IvUrRrQnFJfh+is1fRon9Co9Li0GwoN0x0byrrngU8Ak3Y6D9
D8GjQA4Elm94ST3izJv8iCOLSDBmzsPsXfcCUZfmTfZ5DbUDMbMxRnSo3nQeoKGC
0Lj9FkWcfmLcpGlSXTO+Ww1L7EGq+PT3NtRae1FZPwjddQ1/4V905kyQFLamAA5Y
lSpE2wkCgYEAy1OPLQcZt4NQnQzPz2SBJqQN2P5u3vXl+zNVKP8w4eBv0vWuJJF+
hkGNnSxXQrTkvDOIUddSKOzHHgSg4nY6K02ecyT0PPm/UZvtRpWrnBjcEVtHEJNp
bU9pLD5iZ0J9sbzPU/LxPmuAP2Bs8JmTn6aFRspFrP7W0s1Nmk2jsm0CgYEAyH0X
+jpoqxj4efZfkUrg5GbSEhf+dZglf0tTOA5bVg8IYwtmNk/pniLG/zI7c+GlTc9B
BwfMr59EzBq/eFMI7+LgXaVUsM/sS4Ry+yeK6SJx/otIMWtDfqxsLD8CPMCRvecC
2Pip4uSgrl0MOebl9XKp57GoaUWRWRHqwV4Y6h8CgYAZhI4mh4qZtnhKjY4TKDjx
QYufXSdLAi9v3FxmvchDwOgn4L+PRVdMwDNms2bsL0m5uPn104EzM6w1vzz1zwKz
5pTpPI0OjgWN13Tq8+PKvm/4Ga2MjgOgPWQkslulO/oMcXbPwWC3hcRdr9tcQtn9
Imf9n2spL/6EDFId+Hp/7QKBgAqlWdiXsWckdE1Fn91/NGHsc8syKvjjk1onDcw0
NvVi5vcba9oGdElJX3e9mxqUKMrw7msJJv1MX8LWyMQC5L6YNYHDfbPF1q5L4i8j
8mRex97UVokJQRRA452V2vCO6S5ETgpnad36de3MUxHgCOX3qL382Qx9/THVmbma
3YfRAoGAUxL/Eu5yvMK8SAt/dJK6FedngcM3JEFNplmtLYVLWhkIlNRGDwkg3I5K
y18Ae9n7dHVueyslrb6weq7dTkYDi3iOYRW8HRkIQh06wEdbxt0shTzAJvvCQfrB
jg/3747WSsf/zBTcHihTRBdAv6OmdhV4/dD5YBfLAkLrd+mX7iE=
-----END RSA PRIVATE KEY-----
`



exports.jwks_model = pem2jwk(publickey);

exports.token_model = {
    getAccessToken : (accesstoken, callback) => {
      console.log('getAccessToken');
      callback(null);
    },
    saveAuthorizationCode : (code, client, user, callback) => {
      console.log('saveAuthorizationCode');
      callback(null);
    },
    generateAccessToken : (client, user, scope, callback) => {
      console.log('generateAccessToken');
      
      

      // var decode = jwt.decode(token, { complete: true});
      //   console.log(decode);  
      callback(null);
    },
    getClient : (clientId, clientSecret, callback) => {
      console.log('getClient');
      var sql = 
      `SELECT `
          +`CLIENT_ID, `
          +`CLIENT_SECRET, `
          +`AUTHORIZED_GRANT_TYPES GRANTS, `
          +`WEB_SERVER_REDIRECT_URI REDIRECT_URIS, `
          +`PERSON_ID, `
          +`SCOPE `
      + `FROM `
          +`TBL_CF_CLIENT `
        +`LEFT JOIN OAUTH_CLIENT_DETAILS ON (TBL_CF_CLIENT.ID = OAUTH_CLIENT_DETAILS.CLIENT_ID)`
      +`WHERE `
          +`CLIENT_ID='${clientId}' `
        +`AND `
          +`CLIENT_SECRET='${clientSecret}'`;
        console.log(sql);
        db.select(db.DB_JAPI, sql, (err, data)=>{
          console.log('get Client db callback ');
          if(err || data.length == 0) callback(err, data);
          var client = {
            id : data[0].CLIENT_ID,
            secret : data[0].CLIENT_SECRET,
            grants : data[0].GRANTS.split(','),
            redirectUris : data[0].REDIRECT_URIS.split(','),
            scope : data[0].SCOPE.split(','),
            user : {  id: data[0].PERSON_ID },
          }
          callback(null, client);
          
        });
        
      
    },
    getUserFromClient : (client, callback) => {
      console.log('getUserFromClient');
      callback(null, client.user);
    },
    saveToken : (token, client, user, callback) => {
      console.log('saveToken');
      var jwtObj = {
        exp : Date.parse(token.accessTokenExpiresAt),
        accessToken : token.accessToken,
        iss : '192.168.0.61:3001',
        client : { Id : client.id } , 
      }

      
      var token = jwt.sign(jwtObj, privatekey, {algorithm : 'RS256'});
      var Token = { // return 할 정보들임. 간추려야할것같다.
        accessToken :token,
        accessTokenExpiresAt : token.accessTokenExpiresAt,
        scope : client.scope,
        client : client,
        user : user,
       }
      callback(null, Token);
    },
    validateScope : (user, client, scope, callback) => {
      console.log('validateScope');
      callback(null, 'no_scope'); // scope가 널로올라온다. 여기서 뭘해줘야할까??
    },
  }