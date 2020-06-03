
var usernamesscores = [];

var addusernamesscores = (e)=>{
    e.preventDefault();
    var userinfo = {
       username: document.getElementById('username-score').value
    }
    usernamesscores.push(userinfo);
    document.querySelector('form').reset();
    
    console.warn('added', {usernamesscores} );
    var p = document.querySelector('#p');
    p.textContent = JSON.stringify(usernamesscores);

    localStorage.setItem('userlist', JSON.stringify(usernamesscores) );
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('saveScoreBtn').addEventListener('click', addusernamesscores);
});