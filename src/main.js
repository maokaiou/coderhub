const app = require('./app')
const config = require('./app/config.js')
const userRouter = require('./router/user_router')
const bodyParse = require('koa-bodyparser')
const error = require('./app/error')

app.use(bodyParse())
app.on('error',error)
 app.use(userRouter.routes());
 app.use(userRouter.allowedMethods())

app.listen(config.APP_PORT,(ctx,next)=>{
    console.log(`项目${config.APP_PORT}启动成功`)
})