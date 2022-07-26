const express = require("express");
const multer = require("multer");
const path = require("path");

// 注册路由
const router = express.Router();
const upload = multer({ dest: path.join(__dirname, "public/upload/temp") });
// 获取控制器
const home = require("../controllers/home");
const image = require("../controllers/image");

module.exports = function (app) {
  // 定义路由
  router.get("/", home.index);
  router.get("/images/:image_id", image.index);
  router.post("/images", upload.single("file"), image.create);
  router.post("/images/:image_id/like", image.like);
  router.post("/images/:image_id/comment", image.comment);

  // 注册路由中间件
  app.use(router);
};
