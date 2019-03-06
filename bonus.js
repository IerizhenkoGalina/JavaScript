document.getElementById('calc').onclick = function (){
	let bonus = document.getElementById('bonus').value;
	bonus=parseInt(bonus);
	if(bonus>=0 && bonus<3){alert("Bonus 0 %")}
		else if ( bonus>=3 && bonus<10){alert('Bonus 10%')}
			else if(bonus>=10 && bonus<20){alert("Bonus 20%")}
				else if(bonus>=20){alert('Bonus 25%')}
					else{alert("Error!!! Please enter correct")}
}