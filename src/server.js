const express = require("express")
const app = express()
const { join } = require("path")
const dotenv = require("dotenv")
dotenv.config({ path: join(__dirname, '../.env') })
const cors = require("cors")

const routes = require("./routes")
const connection = require("./database")
const authToken = require("./api/middlewares/authToken")
const unless = require("./api/utils/unless")

app.use(express.json())
app.use(cors())
app.use(unless('/usuarios/login', authToken))
app.use(routes)

const port = 3000
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
