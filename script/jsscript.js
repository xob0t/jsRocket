var swutch= true;

function swutchFlip() {
	if (swutch == true) {
		swutch = (false)
	}
	else {
		swutch = (true)
	};
console.log(swutch);
	
}
var woosh=document.getElementsByClassName("overlay")

var backgroundChange = function () {
	woosh.forEach(function(item, i, arr) {
		if (item=="overlay") {
			item="overlay color"
		}
		else
			item = "overlay"	})
	
}


var rbackgroundChange = function () {
	if (document.getElementById("loom").className == "overlay") {
		document.getElementById("loom").className = "overlay color"
	}
	else(document.getElementById("loom").className = "overlay");
	
}