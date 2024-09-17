// npm install audiokeys --save
//npm install tone
//https://www.npmjs.com/package/audiokeys
import * as Tone from "tone";
import AudioKeys from 'audiokeys';

const synth = new Tone.Synth().toDestination();
const keyboard = new AudioKeys({
    rows: 1 // if rows is one then one row of notes appears, if two then two rows of notes
});

//* musical frequency chart
//! https://muted.io/note-frequencies/
keyboard.down((key) =>{
    console.log(key);
    synth.triggerAttackRelease(key.frequency, "8n");
})