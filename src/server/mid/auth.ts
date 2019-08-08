import config from '../config'

class Auth {
  check() {
    return async(ctx, next) => {
      let token = ctx.headers.authorization;
      let user;
      if (token) {
        token = token.split(/\s/)[1];
        user = new Buffer(token, 'base64')
        user = user.toString('ascii');
        user = user.split(':')[0];
      }
      if (token === config.adminToken) {
        console.info(`auth check success user: ${user}`)
        await next();
      } else {
        console.info(`user ${user} login fail`)
        ctx.res.setHeader('WWW-Authenticate', 'Basic realm=cat')
        ctx.res.writeHead(401, { 'Content-Type': 'text/plain' });
        ctx.body = '';
      }
    }
  }
}
export default Auth;
