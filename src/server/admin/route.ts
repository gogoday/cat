import * as Router from 'koa-router'
import * as child_process from 'child_process'
import config from '../config'
const router = new Router();

router.get('/admin/git_pull', async (ctx, next) => {
  console.log('start git pull ... ')
  await git_pull();
  ctx.body = 'ok'
})

async function git_pull() {
  
  const result = await child_process.execFileSync(config.gitPullSh)
  console.log(result)

}

export default router
