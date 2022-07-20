const express = require("express");

// 注册路由
const router = express.Router();
// 获取控制器
const home = require("../controllers/home");
const image = require("../controllers/image");

module.exports = function (app) {
  // 定义路由
  router.get("/", home.index);
  router.get("/images/:image_id", image.index);
  router.post("/images", image.create);
  router.post("/images/:image_id/like", image.like);
  router.post("/images/:image_id/comment", image.comment);

  // 注册路由中间件
  app.use(router);
};
