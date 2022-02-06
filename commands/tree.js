const fs = require("fs");
const path = require("path");

function treeFn(dirpath) {
    let destPath;
  
    if (dirpath == undefined) {
      console.log("please enter a valid command");
  
      return;
    } else {
      let doesExist = fs.existsSync(dirpath);
      if (doesExist == true) {
        treeHelper(dirpath, " ");
      }
    }
  }
  
  function treeHelper(targetPath, indent) {
    // target
    let isFile = fs.lstatSync(targetPath).isFile();
  
    if (isFile == true) {
      let fileName = path.basename(targetPath);
      console.log(indent + "├──" + fileName);
    } else {
      let dirName = path.basename(targetPath);
      console.log(indent + "└──" + dirName);
  
      let children = fs.readdirSync(targetPath);
      //console.log(children)
  
      for (let i = 0; i < children.length; i++) {
        let childPath = path.join(targetPath, children[i]);
        treeHelper(childPath, indent + "\t");
        // using the recursion to repeat the process for all files and folders
      }
    }
  }

  module.exports={
      treeKey :  treeFn
  }