var score = 0;
var highScore = 0;
var running = false;
var gameLoop;

$(".box").click(function() {
  if (this.classList.contains("mole")) {
    this.classList.remove("mole");
    score++;
    highScore = Math.max(score, highScore);

    $("#score").html(`<b>Score:</b> ${score}`);
    $("#high-score").html(`<b>High score:</b> ${highScore}`);

    const audio = new Audio("sounds/whack.mp3");
    audio.play();
  } else {
    score--;
    $("#score").html(`<b>Score:</b> ${score}`);

    const audio = new Audio("sounds/wrong.mp3");
    audio.play();

    this.classList.add("wrong");
    setTimeout(() => { this.classList.remove("wrong") }, 1000);
  }
});

$(".btn").click(() => {
  running = !running;
  if (running) {
    gameLoop = setInterval(displayMole, 3000);
    $(".btn").text("Stop game");
    $(".btn").removeClass("start");
    $(".btn").addClass("stop");
  } else {
    clearInterval(gameLoop);
    $(".box").removeClass("mole");
    $(".btn").text("Start game");
    $(".btn").removeClass("stop");
    $(".btn").addClass("start");
    score = 0;
    $("#score").html(`<b>Score:</b> ${score}`);
  }
});

function displayMole() {
  $(".box").removeClass("mole");
  const randomBox = Math.floor(Math.random() * 9);
  $(".box").eq(randomBox).addClass("mole");
}
