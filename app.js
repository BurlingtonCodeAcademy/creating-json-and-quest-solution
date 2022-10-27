const express = require("express")
const cors = require("cors")
const app = express()
const routes = require("./controllers/routes")

const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(PORT, () => {
    `[server] listening on ${PORT}`
})