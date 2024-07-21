//making functions that we can use whenever we want
import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver';
export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random()* surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
     //condition to not get the same prompt two times a row

    if(randomPrompt===prompt) return getRandomPrompt(prompt);

     return randomPrompt;
}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}