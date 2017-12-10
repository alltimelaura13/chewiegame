var game = new Game();


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    game.start();
    sound.play();
  };
}
