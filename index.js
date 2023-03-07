// document.querySelector("button").addEventListener("click" ,handelClick);

// function handelClick(){
//     alert("i got clicked!");
// }
var size = document.querySelectorAll(".drum").length;

for(var i= 0 ; i<size ;i++){
document.querySelectorAll(".drum")[i].addEventListener("click" ,function(){
    var buttonInnerHTML=this.innerHTML; //this : here it is the particular[0],[1] that kind of element from drum array.
    driver(buttonInnerHTML);// calling a function inside a function.
});
}

 document.addEventListener("keypress" ,function(event){
    driver(event.key); //event is a paramet in this function and if print key then we will get alot of thing inside it it also cotain the key .
});
function driver(word){
    var buttonInnerHTML = word;
    
    switch (buttonInnerHTML) {
        case "i":
            var audio1 = new Audio("./sounds/tom-1.mp3");
            audio1.play()
            break;
        case "s" :
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "h" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "a" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "n" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "t" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d" :
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        
        case "r" :
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "u" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "m" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "y" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "o" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        default:
            alert("Invalid Action ")
            break;
    }
};
