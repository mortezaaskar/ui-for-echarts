/**
 * Created by liekkas on 16/2/24.
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const tool = require('./tool');
const app = express();
const fs = require("fs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

  console.log('>>> handle an question!uri:', req.url, ' method:', req.method);
  next();
});

const router = express.Router();

router.route('/pc')
  .get(function (req, res) {
    res.json(tool.pc)
  })
router.route('/pc/:project/:name')
  .get(function (req, res) {
    var filePath = path.join(__dirname, 'images/pc/' + req.params.project + '/' + req.params.name);
    fs.exists(filePath, function (exists) {
      if (exists) {
        res.sendFile(filePath)
      } else {
        res.json("冒得图片呢")
      }
    });
  })
router.route('/mobile')
  .get(function (req, res) {
    res.json(tool.mobile)
  })
router.route('/mobile/:project/:name')
  .get(function (req, res) {
    var filePath = path.join(__dirname, 'images/mobile/' + req.params.project + '/' + req.params.name);
    fs.exists(filePath, function (exists) {
      if (exists) {
        res.sendFile(filePath)
      } else {
        res.json("冒得图片呢")
      }
    });
  })

router.route('/asset')
  .get(function (req, res) {
    res.json(tool.asset)
  })
router.route('/asset/:project/:name')
  .get(function (req, res) {
    var filePath = path.join(__dirname, 'images/asset/' + req.params.project + '/' + req.params.name);
    fs.exists(filePath, function (exists) {
      if (exists) {
        res.sendFile(filePath)
      } else {
        res.json("冒得图片呢")
      }
    });
  })

router.route('/screen')
  .get(function (req, res) {
    res.json(tool.screen)
  })
router.route('/screen/:project/:name')
  .get(function (req, res) {
    var filePath = path.join(__dirname, 'images/screen/' + req.params.project + '/' + req.params.name);
    fs.exists(filePath, function (exists) {
      if (exists) {
        res.sendFile(filePath)
      } else {
        res.json("冒得图片呢")
      }
    });
  })

app.use('/api/v1', router);

app.listen(4000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:4000');
});
