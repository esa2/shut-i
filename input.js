'use strict';
var tips = [ 'Maintain a regular sleep routine.(American Sleep Association)', 'Go to bed at the same time. Wake up at the same time. Ideally, your schedule will remain the same (+/- 20 minutes) every night of the week.(ASA)', 'Avoid naps if possible. Naps decrease the \'Sleep Debt\' that is so necessary for easy sleep onset.(ASA)', 'Don\'t stay in bed awake for more than 5-10 minutes. If you find your mind racing, or worrying about not being able to sleep during the middle of the night, get out of bed, and sit in a chair in the dark. Do your mind racing in the chair until you are sleepy, then return to bed. No TV or internet during these periods! That will just stimulate you more than desired.(ASA)', 'When you watch TV or read in bed, you associate the bed with wakefulness. The bed is reserved for two things: sleep and hanky panky.(ASA)', 'The effects of caffeine may last for several hours after ingestion.  Caffeine can fragment sleep and cause difficulty initiating sleep. If you drink caffeine, use it only before noon. Remember that soda and tea contain caffeine as well. (ASA)', 'Cigarettes, alcohol, and over-the-counter medications may cause fragmented sleep. (ASA)', 'Exercise promotes continuous sleep.(ASA)', 'Avoid rigorous exercise three hours before bedtime. Rigorous exercise circulates endorphins into the body which may cause difficulty initiating sleep.(ASA)', 'Have a quiet, comfortable bedroom. (ASA)', 'Set your bedroom thermostat at a comfortable temperature. Generally, a little cooler is better than a little warmer. (ASA)', 'Turn off the TV and other extraneous noise that may disrupt sleep.  (ASA)', 'Consider using blackout curtains, eye shades, ear plugs, "white noise" machines, humidifiers, fans and other devices.  (National Sleep Foundation)', 'If your pets awaken you, keep them outside the bedroom.  (ASA)', 'Your bedroom should be dark. Turn off bright lights.  (ASA)', 'Have a comfortable mattress.  (ASA)', 'If you are a \'clock watcher\' at night, hide the clock (or cover it).  (ASA)', 'Have a comfortable pre-bedtime routine like a warm bath/shower, meditation, or quiet time.  (ASA)', 'Expose yourself to sunlight in the morning. This will help wake you up and keep your circadian rhythms in check. (NSF)', 'An average adult needs 7-9 hrs of sleep per night. (MayoClinic.org)', 'Some people claim to feel rested on just a few hours of sleep a night, but their performance is likely affected. Research shows that people who sleep so little over many nights don\'t perform as well on complex mental tasks as do people who get closer to seven hours of sleep a night.  (MayoClinic.org)', '..., sleeping less than 5 1/2 hours of sleep is associated with some degree of increased mortality. However, sleeping beyond 9 or 10 hours per night, is associated with a markedly increased mortality. (Psychology Today)', 'Don\'t confuse "sleep" with the amount of time you are in bed.  A lot of people generally measure their sleep staring with the time they go to bed rather than when they actually fall asleep.  (Psychology Today)', 'If you like to sleep on your back, use a pillow to support your knees. Keeping your knees supported and slightly bent helps take stress off your lower back. (Spine-Health.com)', 'If you sleep on your side, place a pillow between your knees. Keeping your knees slightly apart maintains better alignment with the hips, and helps keep the lower back from twisting, which is easier on the spinal discs, joints, and soft tissues. (Spine-Health.com)', 'If you like to sleep lying on your stomach, make sure to use a flat (or no) pillow for your head so that your neck is not strained. To maintain the natural inward curve of your lower back (lordosis), place a relatively flat pillow beneath your hips/abdomen. (Spine-Health.com)'];

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

displayRandomTip();
