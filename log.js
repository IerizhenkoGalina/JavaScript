//task #4
document.getElementById('check').onclick = function (){
let login = document.getElementById('login').value;// value обязательно иначе мы видим весь блок input
let passWord = document.getElementById('password').value;

	if(login =='ivan' && passWord =='334455'){alert('WELCOME!')}
	else if(login=="alex" && passWord == '777'){alert("WELCOME!")}
 else if (login=="petr" && passWord == 'b5678'){alert("WELCOME!")}
else {alert("Incorrect login and password.Try again!!!")}
} 


//task #1
document.getElementById('checkme').onclick = function (){
	let b = document.getElementById('num').value;
	let d = document.getElementById('numb').value;

if(b>d){alert("Max number One")}
	else if(b==d){alert("Numbers are equal.Try again!")}
		else if(d>b) {alert("Max number Two")}
else{alert("Go")}
}


//task #2
let c=25;
let a=25;
if(c>a){alert('Max c')}
	else if(c==a){alert('Numbers are equal')}
		else if(c<a){alert("Max a")}
else{alert('Go')}