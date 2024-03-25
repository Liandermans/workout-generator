function generateWorkout(event) {
  event.preventDefault();
  let bodyPart = document.getElementById("body-part");

  new Typewriter("#generated-workout", {
    strings: `Generating a workout for ${bodyPart.value}...`,
    autoStart: true,
    delay: 30,
    cursor: null,
  });
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generateWorkout);
