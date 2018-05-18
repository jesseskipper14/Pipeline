window.onload = function(){
	console.log("IN THIS PAGE");

}

let toggle = false;
setInterval(function timerFunction(){
	
	if(toggle){
		document.getElementById("logout_form").submit();
	}
	else {
		console.log(toggle);
		toggle = true;
	}
}, 1);