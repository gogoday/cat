import * as Router from 'koa-router'
import Service from './service';
const router = new Router();
const server = new Service();

router.get('/', server.index())
router.get('/admin/git_pull', server.gitPull())
router.get('/admin/run_script', server.runScript())

export default router
