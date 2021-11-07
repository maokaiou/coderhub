const connection = require('../app/database')
class UserService{
    async create(user){
        const { username,password} = user
        const statement = `INSERT INTO users (name,password) VALUES (?,?)`
       const result = connection.execute(statement,[username,password])
        return result
    }
    async getUserName(name){
        const statement = `SELECT * FROM users WHERE name=?`
        const result = await connection.execute(statement,[name])
        return result[0]
    }

}

module.exports = new UserService()