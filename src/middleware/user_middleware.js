const service = require('../service/user_service')
const md5Handle = require('../utils/password_handle')
// 中间件一般那是函数，而不是类
const errorType = require('../constants/error_type')
const verifyUser = async (ctx,next)=>{
    //获取用户名和密码
    const { username,password} = ctx.request.body
    // 判断用户名和密码是否为空
    if(!username || !password){
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRE)
        return ctx.app.emit('error',error,ctx)
    }
    // 判断用户名是否注册
    const result =await service.getUserName(username)
    if(result.length){
        const error = new Error(errorType.NAME_ALREADY_EXISTS)
        return ctx.app.emit('error',error,ctx)
    }
    await next()
}
const passwordHandle = async (ctx,next)=>{
    let { password } = ctx.request.body
   ctx.request.body.password = await md5Handle(password)
   await next()
}
module.exports ={
    verifyUser,
    passwordHandle
}