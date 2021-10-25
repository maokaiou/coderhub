const Koa = require('koa');
const app = new Koa();

app.listen(8888,(ctx,next)=>{
    console.log('项目启动成功')
})