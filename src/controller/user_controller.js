const service = require('../service/user_service')

class User {
    // 创建用户
    async create(ctx,next){
        const user = ctx.request.body
       const result = await service.create(user)
        ctx.body =result
    }
}
module.exports =new User();