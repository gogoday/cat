import * as Router from 'koa-router'
import Service from './service';
const router = new Router();
const server = new Service();

router.get('/admin/git_pull', server.getPull())

export default router
