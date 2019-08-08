import * as path from 'path'
import * as Koa from 'koa'
import * as serve from 'koa-static'
import config from '../config'
import Auth from '../mid/auth'
import ErrHandler from '../mid/errHandler'
import router from './route'
const publicFiles = serve(path.join(__dirname, '../../www/'));
const errHandler = new ErrHandler();
const auth = new Auth();
const app = new Koa();
app.use(errHandler.check())
app.use(auth.check())
app.use(router.routes());
app.listen(config.adminPort);
console.info(`admin server listen at port: ${config.adminPort}`)

