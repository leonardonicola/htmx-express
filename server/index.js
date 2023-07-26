import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": data.length,
    })
    res.write(data)
    res.end()
  })
})

export default server
