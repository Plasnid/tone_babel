import * as Tone from "tone";
//* creating a synth
const synth = new Tone.DuoSynth();

//const feedbackDelay = new Tone.FeedbackDelay("4n", 0.25);

const feedbackDelay = new Tone.FeedbackDelay({
    delayTime: .5,
    feedback: 0.3,
    wet: .1
});
synth.connect(feedbackDelay);

//const chorus = new Tone.Chorus(4, 2.5, 0.5);
//feedbackDelay.connect(chorus);
//chorus.toDestination()
feedbackDelay.toDestination()
//*creating a list of nodes to be played
const notes = [
    "G3",
    [null,"G3"],
    null,
    "Bb3",
    "C4",
    "G3",
    [null, "G3"],
    null,
    "F3",
    "F#3",
    null,
    null,
    "Bb4",
    "G4",
    "D4",
    null,
    null,
    "Bb4",
    "G4",
    "Db4",
    null,
    null,
    "Bb4",
    "G4",
    "C4",
    null,
    null,
    "B3",
    "C4",
    null,
    null
];

// create a new sequence with the synth and notes
const synthPart = new Tone.Sequence(
    function(time, note) {
        synth.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    "8n"
);
synthPart.start();

    
let playing = false;
//* a click event on the whole window which will activate the song
window.addEventListener("click", ()=>{
    if(!playing){
        Tone.Transport.bpm.value = 120;
        Tone.Transport.start();
        playing = true;
    }else{
        Tone.Transport.stop();
        playing = false;
    }
})

