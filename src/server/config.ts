
import * as path from 'path'

class ConfigCls {
  adminPort: number = 8081;
  adminToken: string = 'Y2F0OmNhdA==';
  gitPullSh: string = path.resolve(__dirname, '../../script/git_pull.sh')
}

export default new ConfigCls();

