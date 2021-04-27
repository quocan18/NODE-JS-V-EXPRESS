// Stream là phương thức xử lý được dùng để đọc hoặc viết các file
// một cách nhanh và hiệu quả nhất
// Stream còn có thể kết hợp với code và xử lý dữ liệu lớn bằng cách chia nhỏ code

const { read_stream } = require("fs");
const stream = read_stream("");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
