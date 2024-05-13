const fs = require("fs")

function getFiles(dir, files_) {
  files_ = files_ || []
  var files = fs.readdirSync(dir)
  for (var i in files) {
    var name = dir + "/" + files[i]
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_)
    } else {
      files_.push(name)
    }
  }
  fs.writeFileSync("./icons.json", JSON.stringify(files_, null, 4))
  return files_
}

getFiles("./")
