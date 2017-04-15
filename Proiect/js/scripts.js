var i = 0;
function myFunction(x) {
    x.classList.toggle("change");
	if (i % 2 == 0) {
			document.getElementById("mySidenav").style.width = "250px";
			document.getElementById("main").style.marginLeft = "250px";
	} else {
			document.getElementById("mySidenav").style.width = "0";
			document.getElementById("main").style.marginLeft= "0";
	}
	i++;
}

