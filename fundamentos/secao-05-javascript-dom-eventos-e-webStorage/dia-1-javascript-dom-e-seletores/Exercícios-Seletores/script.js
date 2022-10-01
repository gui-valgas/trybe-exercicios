let header = document.querySelector('#header-container');
header.style.backgroundColor = 'green';

let emergency = document.querySelector('.emergency-tasks')
emergency.style.backgroundColor = 'lightpink'

let emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
for( let index = 0; index < emergencyTitles.length; index += 1) {
  emergencyTitles[index].style.backgroundColor = 'magenta';
}

let noEmergencyTasks= document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

let noEmergencyTasksTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksTitles.length; index += 1) {
  noEmergencyTasksTitles[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

let footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)'
