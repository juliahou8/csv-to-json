const fs = require('fs')
const path = require('path')

const convert = (file) => {
  if (!file) return console.log("No file specified\n")
  var buff = fs.readFileSync(file)
  const parse = (str, write) => {
    var json = '[\n'
    var lines = str.split('\n')
    var categories = lines[0].split(',')
    for (i = 0; i < lines.length-1; i++) {
      if (i != 0) {
        json += ',\n'
      }
      json += '{\n'
      for (j = 0; j < categories.length; j++) {
        if (j != 0) {
          json += ',\n'
        }
        json += categories[j] + ': ' + lines[i][j]
      }
      json += '}'
    }
    write(json)
  }

  parse(buff, (json) => {
    fs.writeFileSync(path.join(__dirname,

var buff = fs.readFileSync(process.argv[2])