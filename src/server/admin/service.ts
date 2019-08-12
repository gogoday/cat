import * as child_process from 'child_process'
import config from '../config'

class Service {
  gitPull() {
    return async (ctx, next) => {
      console.log('start git pull ... ')
      const env = ctx.query.env || 'dev';
      // const result = await child_process.execFileSync(config.gitPullSh + ` ${env}` )
      const result = await child_process.execFileSync(config.gitPullSh)
      console.log(result)
      // ctx.header
      ctx.body = result.toString('utf-8')
    }
  }
  index() {
    return async (ctx, next) => {
      ctx.body = '<a href="/admin/git_pull" >git pull cat</a>'
    }
  }
}
export default Service
