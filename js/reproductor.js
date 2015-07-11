var myVideo = document.querySelector("#myVideo");
var reproductor = myVideo.querySelector("video");
var controls = myVideo.querySelector("#controls");
var btnPlay = controls.querySelector("#btnPlay");

var isPlay = false;



btnPlay.onclick = play;
reproductor.onclick = play;



function play(){
	if(isPlay){
		reproductor.pause();
		btnPlay.className = 'fa fa-play';		
	}else{		
		reproductor.play();	
		btnPlay.className = 'fa fa-pause';
	}
	isPlay = !isPlay;
}


