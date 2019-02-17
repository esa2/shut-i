// Ed's code
var loginEl = document.getElementById('login-form');
function onSubmit(event) {
  localStorage.removeItem('loggedIn');
  localStorage.setItem('loggedIn', 'true');
  event.preventDefault();
  var formData = {
    userName: event.target.userName.value,
  };
  var temporaryUserName = '';
  temporaryUserName = formData.userName.toLowerCase();
  localStorage.removeItem('userName');
  localStorage.setItem('userName', JSON.stringify(temporaryUserName));
  if(localStorage.getItem(temporaryUserName) === null) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'input.html';
  } else {
    window.location.href = 'output.html';
  }
}
loginEl.addEventListener('submit', onSubmit);
