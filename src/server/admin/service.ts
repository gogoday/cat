import * as child_process from 'child_process'
import config from '../config'
const path = require('path');

class Service {
  runScript() {
    return async (ctx, next) => {
      let {scriptname} = ctx.query;
      let result:any;
      let html = [];
      html.push('<form action="" method="get">');
      html.push('<input type="text" name="scriptname" />');
      html.push('<input type="submit" name="submit" />');
      html.push('</form>');
      html.push('<div><pre>params:');
      html.push(JSON.stringify(ctx.query, null, 2));
      html.push('</pre></div>');
      if (scriptname) {
        result = await child_process.execFileSync(path.resolve(config.scriptBasePath, scriptname))
        html.push('<div>result:');
        html.push(result.toString('utf-8'));
        html.push('</div>');
      }

      html.push('<a href="/admin/git_pull" >git pull cat</a>');

      ctx.body = html.join('');
    }
  }
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
      let html = [];
      html.push('<a href="/admin/run_script">run script</a>');
      html.push('<a href="/admin/git_pull" >git pull cat</a>');
      ctx.body = html.join('');
    }
  }
}
export default Service
