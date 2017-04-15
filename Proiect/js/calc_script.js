var memvalue;
function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form) {
	form.display.value = Math.cos(form.display.value);
	$('#mem').text(form.display.value);
}

function sin(form) {
	form.display.value = Math.sin(form.display.value);
	$('#mem').text(form.display.value);
}

function tan(form) {
	form.display.value = Math.tan(form.display.value);
	$('#mem').text(form.display.value);
}

function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
	$('#mem').text(form.display.value);
}

function log(form) {
	form.display.value = Math.log(form.display.value);
	$('#mem').text(form.display.value);
}

function fact(form) {
		factvar = 1;
		x = form.display.value;
		for (i = 1;i <= x; i++) {
			factvar = factvar * i;
		}
	form.display.value = factvar;
	$('#mem').text(form.display.value);
}

function exp(form) {
	form.display.value = Math.exp(form.display.value);
	$('#mem').text(form.display.value);
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
	$('#mem').text(form.display.value);
	form.display.value = eval(form.display.value);
}

function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

function set_getMem(){

if(memvalue == null ) //nothing in there, so set it
    {
    memvalue = document.getElementById("disp").value;
    }
else //something in there, so display it
    {
    document.getElementById("disp").innerHTML = memvalue;
    }
}