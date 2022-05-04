const Music = new Audio('XXX.mp3');

// create Array

const songs = [
    {
        id:'1',
        songName:`Sad <br>
        <div class="subtitle">Xxxtentacion</div>`,
        poster:"img/2.jpg"

    },
    {
        id:'2',
        songName:`Moonlight <br>
        <div class="subtitle">Xxxtentacion</div>`,
        poster:"img/2.jpg"

    },
    {
        id:'3',
        songName:`Bellyache <br>
        <div class="subtitle">Billie Eilish</div>`,
        poster:"img/3.jpg"

    },
    {
        id:'4',
        songName:`Aim for The Moon <br>
        <div class="subtitle">Pop Smoke</div>`,
        poster:"img/4.jpg"

    },
    {
        id:'5',
        songName:`Wishing Well <br>
        <div class="subtitle">Juice Wrld</div>`,
        poster:"img/5.jpg"

    },
    {
        id:'6',
        songName:`Good News <br>
        <div class="subtitle">Mac Miller</div>`,
        poster:"img/6.png"

    },
    {
        id:'7',
        songName:`Morbid Minds <br>
        <div class="subtitle">Jack Kays</div>`,
        poster:"img/7.jpg"

    },
    {
        id:'8',
        songName:`Dissolve <br>
        <div class="subtitle">Absofacto</div>`,
        poster:"img/8.jpg"

    },
    {
        id:'9',
        songName:`Heat Waves <br>
        <div class="subtitle">Glass Animals</div>`,
        poster:"img/9.jpg"

    },
    {
        id:'10',
        songName:`IDGAF <br>
        <div class="subtitle">Boywithuke</div>`,
        poster:"img/10.jpg"

    },
    {
        id:'11',
        songName:`Obsessed with you <br>
        <div class="subtitle">Central Cee</div>`,
        poster:"img/11.jpg"

    },
    {
        id:'12',
        songName:`Snowflake <br>
        <div class="subtitle">Powfu</div>`,
        poster:"img/12.jpg"

    },
    {
        id:'13',
        songName:`No Idea <br>
        <div class="subtitle">Don Toliver</div>`,
        poster:"img/13.jpg"

    },
    {
        id:'14',
        songName:`Highest in the room <br>
        <div class="subtitle">Travis Scott</div>`,
        poster:"img/14.jpg"

    },
    {
        id:'15',
        songName:`First class <br>
        <div class="subtitle">Jack Harlow</div>`,
        poster:"img/15.jpg"

    }

]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

masterplay.addEventListener('click',()=>{
    if (Music.paused || Music.currentTime <=0) {
        Music.play();
    } else {
        
    }
})