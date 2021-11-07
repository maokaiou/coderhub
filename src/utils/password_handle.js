// nodejs自带的加密模块
const crypto = require('crypto');

const md5Handle = (password)=>{
    // 用hash来加密
    let md5 =crypto.createHash("md5")
    // 转化为16进制的hash值,这里接收的值必须是一个字符串
    return md5.update(password).digest('hex')
}
module.exports=md5Handle