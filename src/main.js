const express = require("express")
const app = express()
const port = 3000
const path = require("path")


app.use(express.static(path.join(__dirname,"../dist/")))

app.get('*', (req, res) => {
  res.sendFile(path.resolve("./dist/index.html"))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})