'use strict';

function displayProperNavBars() {
  var navBar = document.getElementById('nav_bar');
  var navLogOut = document.createElement('a');
  var navYourResults = document.createElement('a');
  var navAboutUs = document.createElement('a');
  var loggedInParsed = JSON.parse(localStorage.getItem('loggedIn'));
  if (loggedInParsed === true) {
    navAboutUs.innerHTML = '<a class="display3" d="about_us_nav" href="about.html">About Us</a>';
    navBar.appendChild(navAboutUs);
    navYourResults.innerHTML = '<a class="display3" id="your_results_nav" href="output.html">Results</a>';
    navBar.appendChild(navYourResults);
    navLogOut.innerHTML = '<a class="display3" id="logout_nav" href="javascript:logOut()">Logout</a>';
    navBar.appendChild(navLogOut);
  } else {
    navAboutUs.innerHTML = '<a class="display1" id="about_us_nav1" href="about.html">About Us</a>';
    navBar.appendChild(navAboutUs);
  }
}
displayProperNavBars();
