const express = require("express")
const app = express()
const { join } = require("path")
const dotenv = require("dotenv")
dotenv.config({ path: join(__dirname, '../.env') })
const routes = require("./routes")

const connection = require("./database")

app.use(express.json())
app.use(routes)

const port = 3000
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})