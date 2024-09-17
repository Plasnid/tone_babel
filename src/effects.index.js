//npm install tone
import * as Tone from "tone";
//https://www.npmjs.com/package/audiokeys


let playBtn = document.createElement("p");
playBtn.innerText = "play";
let pageBody = document.querySelector("body");
pageBody.appendChild(playBtn);
playBtn.addEventListener("click", playAction);

// bpm(beats per minute is 120 by default)
const synth = new Tone.Synth();

//to check for the page context
//console.log(Tone.context.state);

/**
 * We also have effects
 * AutoFilter
 * AutoPanner
 * AutoWah
 * BitCrusher
 * Chebyshev
 * Chorus
 * Distortion
 * FeedbackDelay
 * Freeverb
 * FrequencyShifter
 * JCReverb
 * MidSideEffect
 * Phaser
 * PingPongDelay
 * PitchShift
 * Reverb
 * StereoWidener
 * Tremelo
 * Vibrato
 */
//https://tonejs.github.io/docs/15.0.4/classes/FeedbackDelay.html
//can take a number, musical notation, and other values for first value
//second value dry to wet value
//const feedbackDelay = new Tone.FeedbackDelay("8n.", .7);
const feedbackDelay = new Tone.FeedbackDelay({
    delayTime: .7,
    feedback: 0.3,
    wet: 0.5
    //maxDelay: 2
});

synth.connect(feedbackDelay);
feedbackDelay.toDestination();

function playAction(){
    //* notes can also be 1n 2n 4n 8n 16n 32n
    synth.triggerAttackRelease("C4", "8n");
    //synth.triggerAttackRelease("D3", "8n");
}