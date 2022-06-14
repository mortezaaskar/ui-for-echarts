/**
 * Created by liekkas on 16/2/29.
 */

const path = require('path');
const fs = require("fs");

const types = ['pc','mobile','asset','screen']
var result = {}
for(var i=0;i<types.length;i++){
  var pDir = __dirname + '/images/' + types[i] + '/';
  var data = []
  parse(pDir,data,types[i])
  result[types[i]] = data
}

function parse(dir, arr, type){
  fs.readdir(dir,function(error,files){
    var len = files.length;
    var file = null;
    for(var i=0;i<len;i++){
      file = files[i];
      parseMore(dir+"/"+file,arr, type);
    }
  });
}

function parseMore(filepath,arr,type){
  fs.stat(filepath,function(err,stats){
    if(stats.isFile()){
      //console.log("isFile,chaning filename...");
      var filename = path.basename(filepath);
      var parentDirname = path.basename(path.dirname(filepath));
      for (var i  = 0;i < arr.length; i++) {
        if (arr[i].name === parentDirname) {
          arr[i].images.push({
            name: filename.split('.')[0],
            url: 'http://localhost:4000/api/v1/' + type + '/' + parentDirname + '/' + filename,
          })
          break;
        }
      }
    }else if(stats.isDirectory()){
      var filename = path.basename(filepath);
      console.log("============["+filename+"] isDir===========");
      var item = {name: filename, images: []};
      arr.push(item)
      parse(filepath,arr,type);
    }else{
      console.log("unknow type of file");
    }
  });
}

module.exports = result;
