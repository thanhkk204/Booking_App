import express from "express"
import 'dotenv/config'
import cookieParser from 'cookie-parser'
const app = express()

const port = process.env.PORT || 9999
// Middle ware
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
