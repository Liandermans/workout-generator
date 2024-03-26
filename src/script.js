function generateWorkout(event) {
  event.preventDefault();

  new Typewriter("#generated-workout", {
    strings: `<strong>Generating your workout for today. Please wait...</strong>`,
    autoStart: true,
    delay: 50,
    cursor: null,
  });

  const generatedWorkout = document.getElementById("generated-workout");
  const bodyPart = document.getElementById("body-part");
  const apiKey = "9fb66eat3c45068of64821d7cabe200f";
  let context = `You are a fitness instruction AI Assistent. Please make sure to provide your answer in basic HTML-format. Start your answer with the h2 element "Workout Plan". Then provide an ordered list containing 5 exercises under the h3 element "Excersises:". Then provide a p element containing instructions with the number of sets and the number of repetitions for each exercise under the h3 element "Instructions:".`;
  let prompt = `Please generate a ${bodyPart.value} workout.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  function showWorkout(response) {
    generatedWorkout.innerHTML = response.data.answer;
  }

  axios.get(apiUrl).then(showWorkout);
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generateWorkout);
