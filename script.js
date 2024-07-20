sourcelist= ['data/video (1).mp4', 'data/video (2).mp4', 'data/video (3).mp4', 'data/video (4).mp4', 
'data/video (5).mp4', 'data/video (6).mp4'];

var likebutton = document.getElementById('likebutton');
var favoritebutton = document.getElementById('favoritebutton');
var leftbutton = document.getElementById('left-arrow');
var rigtbutton = document.getElementById('right-arrow');
var videocontainer = document.getElementById('content-video');
var videolistlength = sourcelist.length - 1;
var startindex = Math.round(Math.random() * videolistlength);
var likedvideolist = [];

function checkedLiked(){
    if (startindex in likedvideolist){
        likevideo();
    }
}

function changeVideo(dir){
    startindex+= dir;
    
    if (startindex < 0){
        startindex = videolistlength;
    }
    if (startindex > videolistlength){
        startindex = 0;
    }
    likebutton.style.color= 'rgba(230, 230, 230, .8)';
    videocontainer.setAttribute('src', sourcelist[startindex])
    checkedLiked();
}
videocontainer.setAttribute('src', sourcelist[startindex]);

function likevideo(){
    // console.log(likedvideolist, startindex, likedvideolist.find(startindex));
    likebutton.style.color = 'red';
    likedvideolist.push(startindex);
}

function favouritevideo(){
    favoritebutton.style.backgroundColor = 'yellow';
}

likebutton.addEventListener('click', likevideo);
videocontainer.addEventListener('dblclick', likevideo);
favoritebutton.addEventListener('click', favouritevideo);
