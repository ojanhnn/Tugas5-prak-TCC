import {Sequelize} from "sequelize";

const db = new Sequelize('todolist', 'root', '',{
    host: '34.172.93.114',
    dialect: 'mysql'
})

export default db;
