var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function defaultInputColor() {
	color1.value = document.getElementsByClassName("color1").value = "#FF0000";
	color2.value = document.getElementsByClassName("color2").value = "#FFFF00";
}

function defaultGradientColor() {
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}


function pickRandomColor() {
	var r = Math.floor(Math.random() * (999999 - 100000));
	var g = Math.floor(Math.random() * (999999 - 100000));

	body.style.background =
	"linear-gradient(to right, "
	+ "#"
	+ r
	+ ", "
	+ "#"
	+ g
	+")"

	console.log(r)
	console.log(g)

	css.textContent = body.style.background
}


defaultInputColor();

defaultGradientColor();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", pickRandomColor);
