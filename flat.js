document.getElementById('calc').onclick =function() {
	// body...
	let flat=document.getElementById('flat').value;
	flat=parseInt(flat);//number
	if (flat>=1 && flat<=20) {alert("First entrance")} 
		else if (flat>=21 && flat <=48){alert("Second entrance")}
		else if  (flat>=49 && flat <=90){alert("Third entrance")}
			else {alert("Range of number is 1 to 90.Try again!!!")}
		};
