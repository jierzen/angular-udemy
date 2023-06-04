interface AudioPlayer{
    audioVolume: number; 
    songDuration: number; 
    song: string; 
    details: Details; 
}   

interface Details{
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 60,
    songDuration: 34,
    song: "Overkill",
    details: {
        author: 'Motorhead',
        year: 1980
    }
}

const song = 'New song'

const { song:anotherSong, songDuration:duration, details  } = audioPlayer;

const {author} = details

console.log('Song: ', anotherSong );
console.log('Duration: ', duration );
//console.log('Author: ', audioPlayer.details.author );
console.log('Author: ', author );

export{};