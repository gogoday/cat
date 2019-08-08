import config from '../config'

class ErrHandler {
  check() {
    return async(ctx, next) => {
      try {
        await next();
        if (!ctx.body) {
          ctx.body = '404'
        }
      } catch (e) {
        console.error(e)
        ctx.body = '500'
      }
    }
  }
}
export default ErrHandler;
