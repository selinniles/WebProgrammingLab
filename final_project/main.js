// for this pomodoro I got help from https://github.com/learn-webdevYT/pomodoro-timer/blob/master/main.js

$(document).ready(function(){
var start = document.getElementById('start');  //get the info from html
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var long_break=0;  //counter for the longer break
//store a reference to a timer variable
var startTimer;
start.addEventListener('click', function(){  //start timer
    startTimer = setInterval(timer, 1000);
})

reset.addEventListener('click',function(){  //if the button reset, delete all saved info about they cyle and start from the beginning
	stopInterval();
  long_break=0;
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;

    clearInterval();
    startTimer = '';
})

stop.addEventListener('click', function(){  //stop timer
		stopInterval();
})


function timer(){
    //Work Timer Countdown
    if(ws.innerText != 0){  //decrease second counter
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){  //for every one minute decrease minute counter
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer Countdown
    if(wm.innerText == 0 && ws.innerText == 0){  //decrease second counter
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){  //for every one minute decrease minute counter
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

		if(long_break % 4 == 0){  //if 4 continuos cycle is finished ask user to take a longer break for the next cycle
			if(confirm("You finished 4 cycles! Do you want to take a long break next time?")){
				bm.innerText = 25;
			}
			else{
			bm.innerText = 5;
			}
		}
        bs.innerText = "00";
        document.getElementById('counter').innerText++;
		long_break++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}
});
