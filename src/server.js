const express = require("express")
const app = express()
const { join } = require("path")
const dotenv = require("dotenv")
dotenv.config({ path: join(__dirname, '../.env') })

const routes = require("./routes")
const connection = require("./database")
const authMiddleware = require("./auth/auth.middleware")
const unless = require("./routes/utils/unless")

app.use(express.json())
app.use(unless('/usuarios/login', authMiddleware))
app.use(routes)

const port = 3000
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})