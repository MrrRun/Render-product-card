'use strict';

let image = document.querySelector('#image');
let heading = document.querySelector('#heading');
let btnYes = document.querySelector('#btnYes');
let btnNo = document.querySelector('#btnNo');
let happySound = new Audio("./happy-happy-happy-cat.mp3");
let sadSound = new Audio("./huh-cat-meme_xyAszPZ.mp3");

btnYes.addEventListener('click', () =>{
  image.src="https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif"
  heading.innerHTML = "I love you too 😍";
  sadSound.pause();
  happySound.play();
  happySound.load = true;
});

let btnYesScale = 1;
let btnNoScale = 10;

btnNo.addEventListener('click', () =>{
  image.src="https://i.pinimg.com/originals/86/5e/d5/865ed5fd38e19384c1ea49e00e4392e2.gif"
  heading.innerHTML = "Really?";
  happySound.pause();
  sadSound.play();
  // sadSound.loop = true;
  btnYesScale += 0.1;
  btnNoScale -= 0.1;
  btnYes.style.transform = `scale(${btnYesScale})`;
  btnNo.style.transform = `scale(${btnNoScale})`;
})