import * as child_process from 'child_process'
import config from '../config'

class Service {
  gitPull() {
    return async (ctx, next) => {
      console.log('start git pull ... ')
      const evn = ctx.query.env || 'dev';
      const result = await child_process.execFileSync(config.gitPullSh + ` ${env}` )
      ctx.body = result
    }
  }
}
export default Service
