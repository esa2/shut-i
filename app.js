
'use strict';

var el = document.getElementsByClassName('logout_nav'); // this makes the logout button set the local storage logged in to false and redirect to main page
el.onClick = logOut;
function logOut() {
  localStorage.removeItem('loggedIn');
  localStorage.setItem('loggedIn', 'false');
  window.location.href = 'index.html';
  showLogIn();
}

var xx = 2


function showLogIn() {
  var loginForm = document.getElementById('login-form');
  var text = document.createElement('h4');
  text.textContent = 'Log In or Sign Up';
  loginForm.appendChild(text);
  var userNameText = document.createElement('p');
  userNameText.textContent = 'User Name';
  loginForm.appendChild(userNameText);
  var userNameLogin = document.createElement('input');
  userNameLogin.name = 'userName';
  userNameLogin.type = 'text';
  userNameLogin.required = 'required';
  loginForm.appendChild(userNameLogin);
  var passwordText = document.createElement('p');
  passwordText.textContent = 'Password';
  loginForm.appendChild(passwordText);

  var passwordLogin = document.createElement('input');
  passwordLogin.name = 'password';
  passwordLogin.type = 'password';
  passwordLogin.required = 'required';
  loginForm.appendChild(passwordLogin);
  var lineBreak = document.createElement('br');
  loginForm.appendChild(lineBreak);
  var button = document.createElement('button');
  button.className = 'inputbutton';
  button.id = 'login';
  button.type = 'submit';
  button.textContent = 'Submit';
  loginForm.appendChild(button);
}
// Ed's code
function getPageName() {
  var pathName = window.location.pathname;
  var pathNameArray = pathName.split('/');
  return pathNameArray.pop();
}

if((getPageName() === 'index.html') && ((localStorage.getItem('loggedIn') === 'false') || (localStorage.getItem('loggedIn') === null))) {
  showLogIn();
}

var tips = [ 'Maintain a regular sleep routine.(American Sleep Association)', 'Go to bed at the same time. Wake up at the same time. Ideally, your schedule will remain the same (+/- 20 minutes) every night of the week.(ASA)', 'Avoid naps if possible. Naps decrease the \'Sleep Debt\' that is so necessary for easy sleep onset.(ASA)', 'Don\'t stay in bed awake for more than 5-10 minutes. If you find your mind racing, or worrying about not being able to sleep during the middle of the night, get out of bed, and sit in a chair in the dark. Do your mind racing in the chair until you are sleepy, then return to bed. No TV or internet during these periods! That will just stimulate you more than desired.(ASA)', 'When you watch TV or read in bed, you associate the bed with wakefulness. The bed is reserved for two things: sleep and hanky panky.(ASA)', 'The effects of caffeine may last for several hours after ingestion.  Caffeine can fragment sleep and cause difficulty initiating sleep. If you drink caffeine, use it only before noon. Remember that soda and tea contain caffeine as well. (ASA)', 'Cigarettes, alcohol, and over-the-counter medications may cause fragmented sleep. (ASA)', 'Exercise promotes continuous sleep.(ASA)', 'Avoid rigorous exercise three hours before bedtime. Rigorous exercise circulates endorphins into the body which may cause difficulty initiating sleep.(ASA)', 'Have a quiet, comfortable bedroom. (ASA)', 'Set your bedroom thermostat at a comfortable temperature. Generally, a little cooler is better than a little warmer. (ASA)', 'Turn off the TV and other extraneous noise that may disrupt sleep.  (ASA)', 'Consider using blackout curtains, eye shades, ear plugs, "white noise" machines, humidifiers, fans and other devices.  (National Sleep Foundation)', 'If your pets awaken you, keep them outside the bedroom.  (ASA)', 'Your bedroom should be dark. Turn off bright lights.  (ASA)', 'Have a comfortable mattress.  (ASA)', 'If you are a \'clock watcher\' at night, hide the clock (or cover it).  (ASA)', 'Have a comfortable pre-bedtime routine like a warm bath/shower, meditation, or quiet time.  (ASA)', 'Expose yourself to sunlight in the morning. This will help wake you up and keep your circadian rhythms in check. (NSF)', 'An average adult needs 7-9 hrs of sleep per night. (MayoClinic.org)', 'Some people claim to feel rested on just a few hours of sleep a night, but their performance is likely affected. Research shows that people who sleep so little over many nights don\'t perform as well on complex mental tasks as do people who get closer to seven hours of sleep a night.  (MayoClinic.org)', '..., sleeping less than 5 1/2 hours of sleep is associated with some degree of increased mortality. However, sleeping beyond 9 or 10 hours per night, is associated with a markedly increased mortality. (Psychology Today)', 'Don\'t confuse "sleep" with the amount of time you are in bed.  A lot of people generally measure their sleep staring with the time they go to bed rather than when they actually fall asleep.  (Psychology Today)', 'If you like to sleep on your back, use a pillow to support your knees. Keeping your knees supported and slightly bent helps take stress off your lower back. (Spine-Health.com)', 'If you sleep on your side, place a pillow between your knees. Keeping your knees slightly apart maintains better alignment with the hips, and helps keep the lower back from twisting, which is easier on the spinal discs, joints, and soft tissues. (Spine-Health.com)', 'If you like to sleep lying on your stomach, make sure to use a flat (or no) pillow for your head so that your neck is not strained. To maintain the natural inward curve of your lower back (lordosis), place a relatively flat pillow beneath your hips/abdomen. (Spine-Health.com)'];
var arrUserNames = [];
var currentUserObject = {};

function User(userName, name, age, wakeUp, hoursDesired, exercise, useCaffeine) { // username object constructor Greg/Nicole
  this.userName = userName;
  this.name = name;
  this.age = age;
  this.hoursDesired = hoursDesired;
  this.wakeUp = wakeUp;
  this.exercise = exercise;
  this.useCaffeine = useCaffeine;
  if (this.age < 18) {
    this.bedTime = this.wakeUp - 10;
  } else if (this.age > 65) {
    this.bedTime = this.wakeUp - 6;
  } else {
    this.bedTime = this.wakeUp - 8;
  }
  this.dinnerTime = convertTime(this.bedTime - 2);
  this.noBlueLight = convertTime(this.bedTime - 1);
  this.stopCoffee = convertTime(this.bedTime - 6);
  this.stopExercise = convertTime(this.bedTime - 3);
  this.bedTime = convertTime(this.bedTime);
  arrUserNames.push(this);
}

// Nicole's code
function convertTime(time) { // calculates time that person should go to bed
  var convertTime = (time);
  if (convertTime < 0) {
    convertTime += 24;
  }
  console.log(convertTime);

  if (convertTime === 24 || convertTime === 0 ) {
    return '12 AM';
  } else if (convertTime <= 11) {
    return convertTime + ' AM';
  } else if (convertTime === 12) {
    return convertTime + ' PM';
  } else {
    return (convertTime - 12) + ' PM';
  }
}



function rng(min, max) { //helper function to find a random number
  return Math.floor(Math.random() * (max - min)) + min;
}

function findRandomTip() { // Gregs code + Adam
  var randomTip = tips[rng(0, tips.length)]; //gets random # from length of array
  //console.log(tips[randomTip]);
  return randomTip;
}

function displayRandomTip() {
  var tipJS = document.getElementById('tip'); //
  tipJS.innerHTML = findRandomTip();
}

// Nicole
if (window.location.pathname === '/input.html') {
  (function inputPageMessage() {
    var welcome = document.getElementById('message');
    welcome.textContent = 'Welcome ' + JSON.parse(localStorage.userName) + '!';
  })();
}

displayRandomTip(); // we might wanna call this somewhere else later......

function convertToLocalStorage(userName, userObject) {
  localStorage.setItem(userName, JSON.stringify(userObject));
}

// Nicole's code
function retrieve() {
  var currentUser = JSON.parse(localStorage.getItem('userName'));
  var userObject = JSON.parse(localStorage.getItem(currentUser));
  currentUserObject = new User(userObject.userName, userObject.name, userObject.age, parseInt(userObject.wakeUp), userObject.hoursDesired, userObject.exercise, userObject.useCaffeine);
  console.log(currentUserObject);
}


// Nicole's code
User.prototype.resultsPage = function() { // This function will dynamically update the HTML on the output page with personalized tips for the user
  retrieve();

  var hoursNeeded = 0;
  var needsMoreSleep = false;
  console.log(currentUserObject.age);
  if (currentUserObject.age > 65) {
    hoursNeeded = 6;
  } else if (currentUserObject.age <= 18) {
    hoursNeeded = 10;
  } else {
    hoursNeeded = 8;
  }

  if (hoursNeeded > currentUserObject.hoursDesired) {
    needsMoreSleep = true;
  }

  // Next 2 lines belong to Ed
  localStorage.setItem('chartBedTime', currentUserObject.bedTime);
  localStorage.setItem('chartHoursNeeded', hoursNeeded);
  var wakeTimeSentence = convertTime(currentUserObject.wakeUp);
  var genericResults = ['Hello ' + currentUserObject.name + '! Based on the fact that you wake up at ' + wakeTimeSentence + ', we recommend you are in bed by ' + currentUserObject.bedTime + '.', 'Finish your dinner by ' + currentUserObject.dinnerTime + ', and no late night snacking!', 'By ' + currentUserObject.noBlueLight + ', make sure you have turned off all electronics. TV, cellphones, and computers all emit a blue light that restricts the production of melatonin in your brain, which helps put you to bed at night.'];

  var resultsHTML = document.getElementById('results');
  for (var i = 0; i < genericResults.length; i++) {
    var advice = document.createElement('li');
    advice.textContent = genericResults[i];
    resultsHTML.appendChild(advice);
  }

  if (needsMoreSleep === true) {
    var moreSleep = document.createElement('li');
    moreSleep.textContent = 'You said you only want ' + currentUserObject.hoursDesired + ' hours of sleep per night. We highly recommend you rethink that, experts state that based on your age group you need more sleep!';
    resultsHTML.appendChild(moreSleep);
  }
  console.log(hoursNeeded);
  console.log(needsMoreSleep);

  if (currentUserObject.useCaffeine) {
    var caffeineAdvice = document.createElement('li');
    caffeineAdvice.textContent = 'We do not recommend caffeine before bed. In order to receive the best sleep quality, you should quit any caffeine consumption by ' + currentUserObject.stopCoffee + '.';
    resultsHTML.appendChild(caffeineAdvice);
  }

  if (currentUserObject.exercise) {
    var exerciseAdvice = document.createElement('li');
    exerciseAdvice.textContent = 'Great job exercising! The more your mind and body are exercised during the day, the more restful sleep you will have. However, working out immediately before bed can make it harder to wind down at the end of the night. Try to finish your workout by ' + currentUserObject.stopExercise + '!';
    resultsHTML.appendChild(exerciseAdvice);
  } else {
    var noExerciseAdvice = document.createElement('li');
    noExerciseAdvice.textContent = 'If you want to improve your sleep quality, exercising is a great way to do it. It tires out your muscles and makes you sleep harder and longer through the night. Consider doing a few pushups and situps every morning, and your body will thank you for it!';
    resultsHTML.appendChild(noExerciseAdvice);
  }
};
if(getPageName() === 'output.html') {
  User.prototype.resultsPage();
}

// Ed's code & Adam
function updateProfile() {
  var userName = JSON.parse(localStorage.getItem('userName'));
  var updateObj = JSON.parse(localStorage.getItem(userName));
  if(updateObj !== null) {
    var inpEl = document.getElementById('inputName');
    inpEl.value = updateObj.name;
    var ageEl = document.getElementById('inputAge');//-adam code
    ageEl.value = updateObj.age;
    var hoursDesiredEl = document.getElementById('inputHoursDesired');//-adam code
    hoursDesiredEl.value = updateObj.hoursDesired;
    var wakeUpEl = document.getElementById('inputWakeUp');//-Adam code
    var time = 0;
    if (updateObj.wakeUp > 12) {
      time = updateObj.wakeUp - 12;
    }
    wakeUpEl.value = time; //Adam and Nicole (this is used to store PM time when updating profile)
    var amPmEl = document.getElementById('inputAmPm');
    if (updateObj.wakeUp > 12) {
      amPmEl.value = 'PM';
      // var yesExerciseEl = document.getElementById('yesexercise');//-adam code
      // if (updateObj.exercise === true){
      //   console.log('testing ' + updateObj.exercise);
      //   yesExerciseEl.checked = true;
      // }
    }
  }
}

if(getPageName() === 'input.html') {
  updateProfile();
}

// Nicole's code
function onSubmit(event) {
  event.preventDefault();
  console.log('submit was clicked');
  var name = event.target.name.value;
  var age = parseInt(event.target.age.value);
  var wakeTime = parseInt(event.target.numbers.value);
  var amPm = event.target.ampm.value;
  if (amPm === 'PM') {
    wakeTime += 12;
  }
  var hoursDesired = parseInt(event.target.hoursDesired.value);
  var exercise;
  console.log('exercise checked', document.getElementById('yesexercise').checked);
  if (document.getElementById('yesexercise').checked === true) {
    exercise = true;
  } else {
    exercise = false;
  }
  var caffeine;
  if (document.getElementById('yescaffeine').checked === true) {
    caffeine = true;
  } else {
    caffeine = false;
  }
  var userName = JSON.parse(localStorage.userName);
  if (localStorage.getItem(userName) !== null) {
    console.log(userName);
    localStorage.removeItem(userName);
  }
  var newUser = new User(userName, name, age, wakeTime, hoursDesired, exercise, caffeine);
  convertToLocalStorage(userName, newUser);
  console.log(arrUserNames);

  window.location.href = 'output.html';
}

if(getPageName() === 'input.html') {
  var formEl = document.getElementById('input-form');
  formEl.addEventListener('submit', onSubmit);
}
