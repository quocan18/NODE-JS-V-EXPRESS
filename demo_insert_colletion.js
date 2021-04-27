const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/user";

MongoClient.connect(url, function (err, user_info) {
  if (err) throw err;

  const dbo = user_info.db("user");
  const my_object = [
    {
      user_name: "An",
      user_description: "This people fine",
      user_gender: "Male",
      user_phone_number: "23131",
      user_email: "abc@gmail.com",
    },
  ];
  dbo.collection("user_info").insertMany(my_object, function (err, res) {
    if (err) throw err;
    console.log("Số document được insert là:" + res.insertedCount);
    db.close();
  });
});
