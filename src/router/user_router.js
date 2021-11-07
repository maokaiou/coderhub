const Router = require('koa-router')
const { create } = require('../controller/user_controller.js')
const {
    verifyUser,
    passwordHandle
} = require('../middleware/user_middleware.js')
 const userRouter =new Router({prefix:'/users'})

 userRouter.post('/',verifyUser,passwordHandle,create)
 module.exports = userRouter