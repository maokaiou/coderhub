const mysql =require('mysql2')
const connection =mysql.createPool({
    host: 'localhost',
    port:3306,
    user:'root',
    password:'mko.13617382584',
    database:'coderhub'
})

module.exports = connection.promise()