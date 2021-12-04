const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const playSound = (event) => {
  const audio = document.quaerySelector(`audio[data-sound="${event.soundCode}"]`);
  const sound = document.quarySelector(`div[data-sound="${event.soundCode}"]`);
  if (!audio) return;

  sound.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const sounds = Array.from(document.querySelector('.sound'))
sounds.forEach(sound => sound.addEventListener('transitioned', removeTransition));
window.addEventListener('sounddown', playSound);
