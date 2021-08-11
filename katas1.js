function oneThroughTwenty() {
  let retorno = []
  let n = 0
  while(n < 20){
   n++
   retorno.push(n)
}
return retorno
}
console.log(oneThroughTwenty())
console.log("fim do loops")

function evensToTwenty() {
    let retorno = []
  let n = 2
  while(n < 20){
retorno.push(n)
n = (n + 2)
}  
return retorno
}
console.log(evensToTwenty())
console.log("fim do loop")

function oddsToTwenty(){
  let retorno = []
  let n = 1
  while(n < 20){
retorno.push(n)
n = (n + 2)
}  
return retorno
}
console.log(oddsToTwenty())
console.log("fim do loop")


function multiplesOfFive() {
  let retorno = []
  let n = 5
  while(n < 100){
 retorno.push(n)
n = (n + 5)
}  
return retorno
}
console.log(multiplesOfFive())
console.log("fim do loop")


function squareNumbers() {
  let retorno = []
  let n = 1
  while(n < 10)  {
retorno.push(n * n)
n = n + 1
}   
return retorno
}
console.log(squareNumbers())
console.log("fim do loops")



function countingBackwards() {
  let retorno = []
  let n = 20
  while(n > 0){
retorno.push(n)
n--
}
return retorno
}
console.log(countingBackwards())
console.log("fim do loops")


function evenNumbersBackwards() {
  let retorno = []
  let n = 20
  while(n > 0){
    retorno.push(n)
n =(n - 2)
}
return retorno
}
console.log(evenNumbersBackwards())
console.log("fim do loops")


function oddNumbersBackwards() {
  let retorno = []  
  let n = 19
  while(n > 0){
    retorno.push(n)
    n = (n - 2)
}
return retorno
}
console.log(oddNumbersBackwards())
console.log("fim do loops")


function multiplesOfFiveBackwards() {
  let retorno = []
  let n = 100
  while(n > 1){
    retorno.push(n)
n = (n - 5)
}  
return retorno
}
console.log(multiplesOfFiveBackwards())
console.log("fim do loops")

function squareNumbersBackwards() {
  let retorno = []
  let n = 9
  while(n > 0)  {
    retorno.push(n * n)
n--
}
return retorno
}
console.log(squareNumbersBackwards())
console.log("fim do loops")
