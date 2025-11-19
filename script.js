const button = document.getElementById('volume-toggle');
const img = button.querySelector('img');
const audio = document.querySelector('audio');

let isMuted = true;

button.addEventListener('click', () => {
  isMuted = !isMuted;

  img.src = isMuted ? 'Resources/Mute.svg' : 'Resources/Unmute.svg';

  if (audio) {
    if (isMuted) {
      audio.pause();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
  }
});