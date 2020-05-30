// function takeANumber(katzDeliLine, name) {
//   katzDeliLine.push(name);
//   return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
// }

function takeANumber(katzDeliLine) {
  var number = 0 
   number++
  katzDeliLine.push(number);
  return (`Welcome, you are number ${number} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    // return ("Currently serving " + katzDeliLine.shift() + ".")
    return (`Currently serving ${katzDeliLine.shift()}.`);
  } else {  
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = 'The line is currently';
  if (katzDeliLine.length > 0) {
    line += ': ';
    for (let i = 0; i < katzDeliLine.length; i++) {
       line +=  (i + 1) + ". " + katzDeliLine[i] + ', ';
    }
    line = line.slice(0, line.length - 2);
    
    return line;
    } else {
      
      return line += ' empty.';
    }
    
  
}