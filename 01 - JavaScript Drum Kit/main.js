window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // Wählt die Div-Elemente mit der Klasse".key" aus und weißt ihn einer Variablen zu
  if (!audio) return; //stop the function running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();

  key.classList.add("playing"); //fügt dem Div .key, die klasse .playing hinzu. im css schon definiert und gestylt. tritt dann in action wenn wir den entsprechenden bustaben drücken.
});

function removeTransition(e) {
  console.log(e);
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
