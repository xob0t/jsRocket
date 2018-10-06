var timer = null;
var countdownNumber = 3;
var changeState = function (state) {
	document.body.className = "body-state" + state;
	clearInterval(timer);
	countdownNumber = 3;
	document.getElementById('countdown').innerHTML=countdownNumber;


	if (state==2){
		timer = setInterval(function () {
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML=countdownNumber;

			if (countdownNumber <= 0){
				changeState(3);
			};

		},500);
	} else if (state == 3){
			var success = setTimeout(function ()
				{
				var randomNumber = Math.round(Math.random()*10);
				if (randomNumber > 3){
					changeState(4);
				}else {
					changeState(5);
				}
			}, 5000)
		};








}