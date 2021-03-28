import React from 'react';
import './App.css'; 

const soundBank = [
  {
    keyTrigger: 'Q',
    id: 'China',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/200[kb]big_china_cym.wav.mp3',
  },
  {
    keyTrigger: 'W',
    id: 'Splash',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/71[kb]thin-splash.wav.mp3',
  },
  {
    keyTrigger: 'E',
    id: 'Crash',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/96[kb]909-bright-crash.wav.mp3',
  },
  {
    keyTrigger: 'A',
    id: 'Ride',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/85[kb]909-bright-ride.wav.mp3',
  },
  {
    keyTrigger: 'S',
    id: 'Bass',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/20[kb]808bd.wav.mp3',
  },
  {
    keyTrigger: 'D',
    id: 'Low-tom',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/44[kb]lotom.wav.mp3',
  },
  {
    keyTrigger: 'Z',
    id: 'Middle-tom',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3',
  },
  {
    keyTrigger: 'X',
    id: 'Snare',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3',
  },
  {
    keyTrigger: 'C',
    id: 'High-Tom',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3',
  },
];

const DrumMachine = () => {
  const [displayedSound, setDisplayedSound] = React.useState();

  const playMyAudio = (sound) => {
    const audioTag = document.getElementById('audio');
    audioTag.src = '';
    audioTag.src = sound.url;
    setDisplayedSound(sound.id);
    fadeOut();
  };

  const fadeOut = () => {
    let instructions = document.querySelector('#instructions');
    instructions.classList.add('fade-out');
    instructions.classList.add('gone');
    instructions.classList.remove('fade-in');
  };

  document.addEventListener('keydown', (e) => {
    let typedKey = e.key.toUpperCase();
    let foundProp = soundBank.find((sound) => sound.keyTrigger === typedKey);
    if (foundProp) {
      playMyAudio(foundProp);
    }
    fadeOut();
  });

  return (
    <div id="drum-machine">
      <div id="display">{displayedSound}</div>
      <div id="drumPadContainer">
        {soundBank.map((sound) => (
          <button
            className="drum-pad"
            id={sound.id}
            onClick={() => playMyAudio(sound)}
          >
            {sound.keyTrigger}
          </button>
        ))}
      </div>
      <audio id="audio" className="clip" autoplay="true" />
      <div
        className="fade-in"
        id="instructions"
        onClick={() => fadeOut()}
        onKeyPress={() => fadeOut()}
      >
        Click the buttons on your keyboard to play music...Enjoy
      </div>
    </div>
  );
}
export default DrumMachine;


