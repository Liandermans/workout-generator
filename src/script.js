function generateWorkout(event) {
  event.preventDefault();

  new Typewriter("#generated-workout", {
    strings: `Generating your workout for today. Please wait...`,
    autoStart: true,
    delay: 50,
    cursor: null,
  });

  const generatedWorkout = document.getElementById("generated-workout");
  const bodyPart = document.getElementById("body-part");
  const apiKey = "9fb66eat3c45068of64821d7cabe200f";
  let context = `Please make sure to provide your answer in basic HTML-format. Please provide 5 exercises first. Then provide instructions with the number of sets and number of repetitions per exercise.`;
  let prompt = `Please generate a workout for the ${bodyPart}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  function showWorkout(response) {
    generatedWorkout.innerHTML = response.data.answer;
  }

  axios.get(apiUrl).then(showWorkout);
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generateWorkout);
