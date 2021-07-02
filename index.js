

// var btn = document.querySelectorAll('.set button').length;

// for (var i = 0; i < btn; i++){

//     document.querySelectorAll(".set button")[i].addEventListener("click", function() {
        
//         var buttonInnerHtml = this.innerHTML;

//         makeSound(buttonInnerHtml)

//         buttonAnimation(buttonInnerHtml)

  
//     });
// }


// document.addEventListener('keypress' , function(event){

//     makeSound(event.key)
//     buttonAnimation(event.key)

// });


// function makeSound(key){

//     switch (key) {
//         case 'w':
//             var audio = new Audio('sounds/tom-1.mp3')
//             audio.play();
//             break;

//         case 'a':
//             var audio = new Audio('sounds/tom-2.mp3')
//             audio.play();
//             break;

//         case 's':
//             var audio = new Audio('sounds/tom-3.mp3')
//             audio.play();
//             break;

//         case 'd':
//             var audio = new Audio('sounds/tom-4.mp3')
//             audio.play();
//             break;
    
//         case 'j':
//             var audio = new Audio('sounds/snare.mp3')
//             audio.play();
//             break;

//         case 'k':
//             var audio = new Audio('sounds/crash.mp3')
//             audio.play();
//             break;

//         default:
//             var audio = new Audio('sounds/kick-bass.mp3')
//             audio.play();
//             break;
//     }
// }

// function buttonAnimation (currenkey){

//     document.querySelector('.' + currenkey).classList.add('pressed');


    
//     setTimeout(function(){

//         document.querySelector('.' + currenkey).classList.remove("pressed");
//     },300);

   
// }
   
   

// grab everything we need
const buttons = document.querySelectorAll('.set button');


// function
press = (e) => {
    
    const pressedButton = e.target.id;
    const pressedAnimattion = e.target.innerHTML;
    console.log(pressedButton);
    makeSound(pressedButton);
    pressedAnimation(pressedAnimattion);

}

makeSound = (key) => {
    
    const audio = new Audio(`sounds/${key}.mp3`)
    audio.play();
        
}

pressedAnimation = (e) => {
    
    document.querySelector(`.${e}`).classList.add('pressed');

     setTimeout(() => {
         document.querySelector(`.${e}`).classList.remove('pressed');
     },500);
}

//add event listener
buttons.forEach(button => button.addEventListener('click' , press , pressedAnimation));













