/*declaring an array for my variable*/
var usernamesscores = [];
/*function that prevents the default event and pushs submitted info*/
var addusernamesscores = (e) => {
	e.preventDefault();
	var userinfo = {
		username: document.getElementById('username-score').value
	};
	usernamesscores.push(userinfo);
	document.querySelector('form').reset();
/*for display purposes*/
	console.warn('added', {
		usernamesscores
	});
	var p = document.querySelector('#p');
	p.textContent = JSON.stringify(usernamesscores);
	/*uses local storage to get the string stored*/
	localStorage.setItem('userlist', JSON.stringify(usernamesscores));
};
/*event listeners on the buttons to run the function when clicked*/
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('saveScoreBtn').addEventListener('click', addusernamesscores);
});