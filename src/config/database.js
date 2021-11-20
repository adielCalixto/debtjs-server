require('dotenv').config()

const config = {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWD,
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    define: {
        underscored: true,
        charset: 'utf8',
        timestamps: true,
    }
}

module.exports = config;