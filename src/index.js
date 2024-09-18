//npm install tone
import * as Tone from "tone";

//* documentation for timing is here:  https://github.com/Tonejs/Tone.js/wiki/Time

const synth = new Tone.Synth({
    oscillator:{
        type: "sine" // can be sine, square, triangle, or sawtooth
    }
}).toDestination();

const pSynth = new Tone.PolySynth({
    oscillator:{
        type: "sine"
    }
}).toDestination();

//* What about writing a tune?
window.addEventListener("click", ()=>{
    console.log("play de music!");
    //schedule a series of notes, one per second
    /*
    synth.triggerAttackRelease('C4', 0.5, 0)
    synth.triggerAttackRelease('E4', 0.5, 1)
    synth.triggerAttackRelease('G4', 0.5, 2)
    synth.triggerAttackRelease('B4', 0.5, 3)
    */

    //schedule a series of notes to play
    //synth.triggerAttackRelease(note, duration, time when note starts playing)
    synth.triggerAttackRelease('C4', '4n', '+0:0:0')
    synth.triggerAttackRelease('E4', '8n', '+0:1:1')
    synth.triggerAttackRelease('G4', '16n', '+0:2:0')
    synth.triggerAttackRelease('B4', '16n', '+0:2:1')
    synth.triggerAttackRelease('G4', '16', '+0:2:2')
    synth.triggerAttackRelease('E4', '2n', '+0:3:0')
    
    //* and if you want to make chords. here is an example
    pSynth.triggerAttackRelease(["C2", "E2", "G2", "B2"], "4n", '+0:3:3');
})