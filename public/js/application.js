const btnArr = document.querySelectorAll('.card-body');
const voiceList = document.getElementById('voiceList');
const synth = window.speechSynthesis;
let voices = [];

populateVoices();

if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
}

function populateVoices() {
  voices = synth.getVoices();
  voiceList.innerHTML = '';
  voices.forEach((voice) => {
    let listItem = document.createElement('option');
    listItem.textContent = voice.name;
    listItem.setAttribute('data-lang', voice.lang);
    listItem.setAttribute('data-name', voice.name);
    voiceList.appendChild(listItem);
  });
}
console.log(btnArr);
btnArr.forEach((btn) => (
  btn.addEventListener('click', () => {
    const toSpeak = new SpeechSynthesisUtterance(btn.lastChild.previousElementSibling.innerText);
    const selectedVoiceName = voiceList.selectedOptions[0].getAttribute(
      'data-name',
    );
    voices.forEach((voice) => {
      if (voice.name === selectedVoiceName) {
        toSpeak.voice = voice;
      }
    });
    synth.speak(toSpeak);
  })
));
