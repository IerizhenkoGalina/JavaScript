document.getElementById('birth').onclick = function (){
	let birth = document.getElementById("year").value;
	let old = 2019-birth;
	if( old>=16) {alert('Welcome!!!')}
		else{alert('Off limits!!!')}
}