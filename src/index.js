//npm install tone
import * as Tone from "tone";

const synth = new Tone.Synth({
    oscillator:{
        type: "sine" // can be sine, square, triangle, or sawtooth
    }
}).toDestination();

//* What about writing a tune?
window.addEventListener("click", ()=>{
    console.log("play de music!");
    // use an array of objects as long as the object has a "time" attribute
    let now = Tone.now();
    let part = new Tone.Part(((time, value) => {
        // the value is an object which contains both the note and the velocity
        synth.triggerAttackRelease(value.note, "8n",time, value.velocity);
    }), [{ time: "0:0:0", note: "C3", velocity: 0.9 },  //bars:quarterNotes::16 notes
        { time: "0:1:0", note: "C3", velocity: 0.5 },
        { time: "0:2:0", note: "C3", velocity: 0.5 },
        { time: "0:3:0", note: "D3", velocity: 0.5 },
        { time: "0:3:2", note: "E3", velocity: 0.5 },

        { time: "1:0:2", note: "E3", velocity: 0.5 },
        { time: "1:1:2", note: "D3", velocity: 0.5 },
        { time: "1:2:0", note: "E3", velocity: 0.5 },
        { time: "1:3:0", note: "F3", velocity: 0.5 },
        { time: "1:3:2", note: "G3", velocity: 0.5 },

        { time: "2:0:0", note: "C4", velocity: 0.5 },
        { time: "2:0:2", note: "C4", velocity: 0.5 },
        { time: "2:0:3", note: "C4", velocity: 0.5 },

        { time: "2:1:0", note: "G3", velocity: 0.5 },
        { time: "2:1:2", note: "G3", velocity: 0.5 },
        { time: "2:1:3", note: "G3", velocity: 0.5 },

        { time: "2:2:0", note: "E3", velocity: 0.5 },
        { time: "2:2:2", note: "E3", velocity: 0.5 },
        { time: "2:2:3", note: "E3", velocity: 0.5 },

        { time: "2:3:0", note: "C3", velocity: 0.5 },
        { time: "2:3:2", note: "C3", velocity: 0.5 },
        { time: "2:3:3", note: "C3", velocity: 0.5 },

        { time: "3:0:0", note: "G3", velocity: 0.5 },
        { time: "3:0:3", note: "F3", velocity: 0.5 },
        { time: "3:1:0", note: "E3", velocity: 0.5 },
        { time: "3:1:3", note: "D3", velocity: 0.5 },
        { time: "3:2:0", note: "C3", velocity: 0.5 },
    ]).start(now);
    Tone.Transport.start(0);
})
/**[{ time: 0, note: "D3", velocity: 0.9 },
    { time: "0:1", note: "D3", velocity: 0.5 },
    { time: "0:2", note: "E3", velocity: 0.5 },
    { time: "0:4", note: "D3", velocity: 0.5 },
    { time: "0:6", note: "G3", velocity: 0.5 },
    { time: "0:8", note: "F#3", velocity: 0.5 },
]
**/