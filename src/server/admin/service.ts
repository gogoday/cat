import * as child_process from 'child_process'
import config from '../config'

class Service {
  gitPull() {
    return async (ctx, next) => {
      console.log('start git pull ... ')
      const result = await child_process.execFileSync(config.gitPullSh)
      ctx.body = result
    }
  }
}
export default Service
