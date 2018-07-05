/*var katzDeli = [];
var n=0;
function takeANumber(katzDeli) {
   
  
  katzDeli.push(n + katzDeli.length);
  return `Welcome, You are number ${n} in line.`

  
}
function nowServing(katzDeli) {
if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!"
} else{
 var str = `Currently serving ${n}.`
 katzDeli.shift();
 return str
}
}
function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
  return "The line is currently empty."
} else{
 var newArray=[];
 for (let i=0;i<katzDeli.length;i++){
   newArray[i]=` ${i+1}. ${katzDeli[i]}`
 }
 
return `The line is currently:${newArray.toString()}`
}
  
}*/


var katzDeli = []
function takeANumber (katzDeliLine,newCustomer){
  katzDeliLine.push(newCustomer);
  var message = `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
  return message
  
}
 
function  nowServing (katzDeliLine){
  var message1;
  if(katzDeliLine.length === 0){
    message1 = "There is nobody waiting to be served!"
  }else{
    message1 = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift()
  }
  return message1
}
function currentLine (katzDeliLine){
  var message2;
  var newArray1;
  if(katzDeliLine.length === 0){
    message2 = "The line is currently empty."
  }else{
    
    for (var i = 0; i<katzDeliLine.length; i++){
      
      newArray1[i]=`${i+1}. ${katzDeliLine[i]}`
      `The line is currently: 1. Ada, 2. Grace`

    }
    
    
    
    
  }
  
}
