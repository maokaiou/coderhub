const errorType = require('../constants/error_type')
const errorHandler = async (error,ctx)=>{
    let message,status
    switch (error.message){
        case errorType.NAME_OR_PASSWORD_IS_REQUIRE:
            status =400;
            message= '用户名或者密码为空~';
            break;
        case errorType.NAME_ALREADY_EXISTS:
            status =409;
            message= '用户名已经存在';
            break;
        default:
            status=404;
            message='Not Found';
    }
    ctx.status = status
    ctx.body = message

}


module.exports = errorHandler