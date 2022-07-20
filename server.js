const express = require("express");
const configure = require("./server/configure");

app = express();
// 注册一系列中间件
app = configure(app);
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(`Server is running on http://localhost:${app.get("port")}`);
});
