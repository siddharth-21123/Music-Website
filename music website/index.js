let songindex=0;
let audioelement=new Audio('music/1.mp3');
let play=document.getElementById('play');
let progess=document.getElementById('progress');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let playsong=Array.from(document.getElementsByClassName('playsong'));

let songs=[
    {songname:"Shape of You",id:"1" ,duration:"3:53",coverpath:"cover/1.png",songpath:"music/1.mp3"},
    {songname:"Oh Ho Ho Ho",id:"2" ,duration:"4:05",coverpath:"cover/2.png",songpath:"music/2.mp3"},
    {songname:"Raataan Lambiyaan",id:"3" ,duration:"3:50",coverpath:"cover/3.png",songpath:"music/3.mp3"},
    {songname:"Sia - Cheap Thrills",id:"4" ,duration:"3:45",coverpath:"cover/4.png",songpath:"music/4.mp3"},
    {songname:"Illegal Weapon",id:"5" ,duration:"3:48",coverpath:"cover/5.png",songpath:"music/5.mp3"},
    {songname:"High Rated Gabru",id:"6" ,duration:"3:34",coverpath:"cover/6.png",songpath:"music/6.mp3"},
    {songname:"Na Ja",id:"7" ,duration:"3:28",coverpath:"cover/7.png",songpath:"music/7.mp3"},
    {songname:"Chogada",id:"8" ,duration:"4:10",coverpath:"cover/8.png",songpath:"music/8.mp3"},
    {songname:"I Don't Know Where I'm Going",id:"9" ,duration:"3:57",coverpath:"cover/9.png",songpath:"music/9.mp3"},
    {songname:"What Makes You Beautiful",id:"10" ,duration:"3:45",coverpath:"cover/10.png",songpath:"music/10.mp3"}
];

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
    element.getElementsByClassName('duration')[0].innerHTML=songs[i].duration+`<i id=${songs[i].id} class="fa-sharp playsong fa-solid fa-circle-play fa-inverse"></i>`;
});

play.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        if(songindex==0){
            songindex=1;
        }
        document.getElementById('songchar').innerHTML=`<img src=${songs[songindex-1].coverpath} alt="no gif" id='gif'>`+songs[songindex-1].songname;
        document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
    }
    else{
        audioelement.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
        gif.style.opacity=0;   
        document.getElementById('songchar').innerHTML=`<img src=${songs[songindex-1].coverpath} alt="no gif" id='gif'>`+songs[songindex-1].songname;
        document.getElementById(`${songindex}`).classList.remove('fa-circle-pause');
        document.getElementById(`${songindex}`).classList.add('fa-circle-play');
    }
})

audioelement.addEventListener('timeupdate',()=>{
    pro=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progress.value=pro;
})

progess.addEventListener('change',()=>{
    audioelement.currentTime=(progress.value*audioelement.duration)/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index=songindex;
        makeallplays();
        songindex=parseInt(e.target.id);
        if(audioelement.paused || audioelement.currentTime<=0){
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioelement.src=`music/${songindex}.mp3`;
            if(index==songindex){
                audioelement.currentTime=ct;
            }
            audioelement.play();
            play.classList.remove('fa-circle-play');
            play.classList.add('fa-circle-pause');
            gif.style.opacity=1;
            document.getElementById('songchar').innerHTML=`<img src=${songs[songindex-1].coverpath} alt="no gif" id='gif'>`+songs[songindex-1].songname;
        }
        else{
            audioelement.pause();
            play.classList.remove('fa-circle-pause');
            play.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }
        ct=audioelement.currentTime;
    })
})

document.getElementById('forward').addEventListener('click',()=>{
    document.getElementById(`${songindex}`).classList.remove('fa-circle-pause');
    document.getElementById(`${songindex}`).classList.add('fa-circle-play');
    if(songindex==10){
        songindex=1;
    }
    else{
        songindex+=1;
    }
    document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
    document.getElementById('songchar').innerHTML=`<img src=${songs[songindex-1].coverpath} alt="no gif" id='gif'>`+songs[songindex-1].songname;
    audioelement.src=`music/${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})

document.getElementById('backward').addEventListener('click',()=>{
    document.getElementById(`${songindex}`).classList.remove('fa-circle-pause');
    document.getElementById(`${songindex}`).classList.add('fa-circle-play');
    if(songindex<=1){
        songindex=10;
    }
    else{
        songindex-=1;
    }
    document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
    document.getElementById('songchar').innerHTML=`<img src=${songs[songindex-1].coverpath} alt="no gif" id='gif'>`+songs[songindex-1].songname;
    audioelement.src=`music/${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})

document.getElementById('shuffle').addEventListener('click',()=>{
    document.getElementById(`${songindex}`).classList.remove('fa-circle-pause');
    document.getElementById(`${songindex}`).classList.add('fa-circle-play');
    songindex=songindex-6;
    if(songindex<1){
        songindex=songindex+10;
    }
    document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
    document.getElementById('songchar').innerHTML=`<img src=${songs[songindex-1].coverpath} alt="no gif" id='gif'>`+songs[songindex-1].songname;
    audioelement.src=`music/${songindex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    gif.style.opacity=1;
})

document.getElementById('repeat').addEventListener('click',()=>{
    audioelement.currentTime=0;
})

