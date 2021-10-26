const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const greetings = [
  "Ugh what do you want now? I mean I'm great. HA HA",
  "Leave me alone",
  "Terrible. You happy you asked now? Hmm. Didn't think so, now get out of here.",
];

const boo = ["Booooooooooo you suck!!", "Booooooooooo you suck!!"];

const weather = [
  "Why do you care, you never leave the house anyways",
  "Weather is okay as always, now leave me alone",
  "Maybe it's hot, maybe it's cold. I don't know or care. ",
];

const joke = [
  "Why did the chicken cross the road? To get to the other side. ",
  "What do you call a can opener that doesn’t work? A can't opener!",
  "There are three types of people in the world: Those who can count and those who can’t. ",
  "I like elephants. Everything else is irrelephant.",
  "What’s red and bad for your teeth? A brick. ",
  "What kind of tea is hard to swallow? Reality. ",
  "Why don’t dinosaurs talk? Because their dead.",
  "What’s green and has wheels? Grass I lied about the wheels. ",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Voice recognition activated. Try speaking into the microphone.");
};

recognition.onspeechend = function () {
  console.log(
    "You were quiet for a while so voice recognition turned itself off."
  );
};

recognition.onresult = function (event) {
  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far.
  // We only need the current one.
  let current = event.resultIndex;

  // Get a transcript of what was said.
  let transcript = event.results[current][0].transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  let speech = new SpeechSynthesisUtterance();

  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  if (message.includes("boo")) {
    const finalText = boo[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  if (message.includes("weather")) {
    const finalText = weather[Math.floor(Math.random() * greetings.length)];

    speech.text = finalText;
  }

  if (message.includes("tell me a joke")) {
    const finalText = joke[Math.floor(Math.random() * joke.length)];

    speech.text = finalText;
  }

  // Set the text and voice attributes.

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
