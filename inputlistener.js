//Adam's code: this listener takes existing user from output page to input page to change their sleep profile
function onSubmitUpdate(event) {
  console.log('is this working?');
  event.preventDefault();
  window.location.href = 'input.html';
}
var profileEl = document.getElementById('profile');
profileEl.addEventListener('submit', onSubmitUpdate);
