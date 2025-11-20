var video;

// Q - Unsure where to initialize video
// initialize video element
video = this.document.querySelector(".video");

// Q - Unsure if this is necessary
//set preload of video to true (make it load before page)
video.setAttribute("preload","true")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// initialize video element
	//video = this.document.querySelector(".video");

	// remove autoplay attribute to turn off autoplay --------------
	// remove attribute source: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
	//DEBUG - print out video to see its attributes
	console.log(video);

	//remove autoplay attribute 
	video.removeAttribute("autoplay");

	//DEBUG - check if autoplay attribute was removed
	console.log(video);

	// turn off auto looping ----------------------------------------

});

// Play --------------------------------------------------------------------------------------
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// play method source: https://www.w3schools.com/tags/ref_av_dom.asp
	// make video play
	video.play();
	// update volume information based on volume slider
	video.volume = document.querySelector("#slider").value/100;

});


// Pause ---------------------------------------------------------------------------------------
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	// pause method source: https://stackoverflow.com/questions/10327907/play-pause-html5-video-javascript
	//make video pause
	video.pause();

});

// Slow down video speed ------------------------------------------------------------------------
document.querySelector("#slower").addEventListener("click", function() {
	// get current playback rate
	var curr_rate = video.playbackRate;
	// DEBUG - print out current playback rate
	console.log("Current video speed: "+curr_rate);

	// slow it by 10%
	video.playbackRate = curr_rate*0.9;
	// Print out new playback rate
	console.log("Slowed video speed: "+video.playbackRate);

});

// Speed up video speed ----------------------------------------------------------------------------
document.querySelector("#faster").addEventListener("click", function() {
	// get current playback rate
	var curr_rate = video.playbackRate;
	// DEBUG - print out current playback rate
	console.log("Current video speed: "+curr_rate);

	// increase speed by 10%
	video.playbackRate = curr_rate*1.1;
	// print out new playback rate
	console.log("Slowed video speed: "+video.playbackRate);
});

// Skip ahead ---------------------------------------------------------------------------------------
document.querySelector("#skip").addEventListener("click", function() {
	// grab current video time & length of whole video
	var curr_time = video.currentTime;
	// DEBUG print out curr time
	//console.log("Starting video time is: "+curr_time)

	// grab full video length / duration
	var vid_len = video.duration;
	// DEBUG print out total video duration
	//console.log("Video duration is: "+vid_len)

	// if video length exceeded, go back to start
	if (curr_time + 10 > vid_len) {
		// go back to start of video (set current time to beginning)
		video.currentTime = 0;
	}
	// if not, go forward 10 seconds
	else {
		video.currentTime = curr_time + 10;
	}

	// log current location of video (current or new aaa)
	console.log("Current video location is"+video.currentTime)
});

// Mute/Unmute -------------------------------------------------------------------------------------------
document.querySelector("#mute").addEventListener("click", function() {
	// grab current volume
	var curr_vol = video.volume;
	// DEBUG, what is current volume
	// console.log("Starting volume is: "+curr_vol)

	// check if muted or not
	// if video is currently muted (volume 0)
	if (curr_vol === 0) {
		// unmute
		video.volume = 1;
		// update button text to 'Mute'
		document.querySelector("#mute").innerHTML= "Mute";
		//console.log("Muted!")


	}
	// if video not muted
	else {
		//mute it (set volume to 0)
		video.volume = 0;
		// update button text to 'unmute'
		document.querySelector("#mute").innerHTML = "Unmute";
		//console.log("Unmuted!")
	}

});

// Volume Slider ---------------------------------------------------------------------------------------
document.querySelector("#slider").addEventListener("click", function() {
	//DEBUG - check what new value is
	//console.log("Updated value of slider is "+this.value)
	//update volume based on new slider input
	video.volume = (this.value)/100;
	// update volume text
	document.querySelector("#volume").innerHTML = video.volume*100+"%";
});

// Style - Old School -----------------------------------------------------------------------------------
// apply old school class
document.querySelector("#vintage").addEventListener("click", function() {
	//apply old school class to video
	video.classList.add("oldSchool");
});

// Style - Original ----------------------------------------------------------------------------
// return video to original style
document.querySelector("#orig").addEventListener("click", function() {
	//apply old school class to video
	video.classList.remove("oldSchool");
});
