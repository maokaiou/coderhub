const dotenv = require('dotenv');
// dotenv会将根目录下的.env文件中的属性配置到process.env中
dotenv.config()
module.exports={APP_PORT}=process.env
