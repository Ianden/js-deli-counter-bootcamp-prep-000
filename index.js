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

