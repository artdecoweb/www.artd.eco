// Koa middleware
async function throttle(ctx, next){
  if (ctx.path == '/throttle.css') {
    await new Promise(r => setTimeout(r, 500))
    ctx.type = 'text/css'
    ctx.body = ''
  }
  await next()
}