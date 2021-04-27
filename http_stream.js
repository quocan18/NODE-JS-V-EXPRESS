var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    const file_stream = fs.createReadStream("content/abc.txt", "utf8");
    file_stream.on("open", () => {
      file_stream.pipe(res);
    });
    file_stream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(3000);
