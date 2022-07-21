const fs = require("fs");
const path = require("path");

module.exports = {
  index: (req, res) => {
    const viewModel = {
      image: {
        uniqueId: 1,
        title: "示例图片1",
        description: "这是张测试图片",
        filename: "sample1.jpg",
        views: 0,
        likes: 0,
        timestamp: Date.now(),
      },
      comments: [
        {
          image_id: 1,
          email: "test@testing.com",
          name: "Test Tester",
          comment: "Test 1",
          timestamp: Date.now(),
        },
        {
          image_id: 1,
          email: "test@testing.com",
          name: "Test Tester",
          comment: "Test 2",
          timestamp: Date.now(),
        },
      ],
    };
    res.render("image", viewModel);
  },
  create: (req, res) => {
    let tempPath = req.file.path;
    let imgUrl = req.file.filename;
    let ext = path.extname(req.file.originalname).toLowerCase();
    let targetPath = path.resolve("./public/upload" + imgUrl + ext);

    if (ext === ".png" || ext === ".jpg" || ext === ".jpeg" || ext === ".gif") {
      fs.rename(tempPath, targetPath, error => {
        if (error) throw error;
        res.redirect("/images/" + imgUrl);
      });
    } else {
      fs.unlink(tempPath, error => {
        if (error) throw error;
        res.json(500, { error: "只允许上传图片文件。" });
      });
    }
  },
  like: (req, res) => {
    res.send("The image: like POST controller");
  },
  comment: (req, res) => {
    res.send("The image: comment POST controller");
  },
};
