function convertFarenheit(){
	var c;
		c = document.getElementById("gfarenheit").value * 9 / 5 +32;
		document.getElementById("gcelcius").value = Math.round(c);
}

function convertCelcius(){
	var f;
		f = (document.getElementById("gcelcius").value -32) * 5 / 9;
		document.getElementById("gfarenheit").value = Math.round(f);
	}
