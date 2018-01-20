var katzDeli = [];

function takeANumber(line, customer) {
  return line.length + 1
}

function nowServing(line) {
  if (line.length > 0) {
    serving = line[0]
    line.shift()
  }
  else {
    serving = "There is nobody waiting to be served!"
  }

  return serving
}

function currentLine(line) {
  var lineList
  if (line.length > 0) {
    lineList = `The line is currently: 1. ${line[0]}, `

    for (var i = 1; i <= line.length + 1; i++) {
      lineList = `${lineList}${i + 1}: ${line[i]}, `
    }
  } else {
    lineList = "The line is currently empty."
  }
  return lineList
}
