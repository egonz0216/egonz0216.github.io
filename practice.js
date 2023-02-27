var yourName = prompt("What is your name?")
var codeQuestion = prompt("Do you know how to write code?")
if(codeQuestion === "yes"){
    alert(`You will rule the world, ${yourName}!`)
}else if(codeQuestion === "no") {
    alert("well, good luck with that.")
}