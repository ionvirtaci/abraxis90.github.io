const YEAR_OF_FIRST_FRONTEND_PROJECT = 2016;

// on DOM loaded
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date();
  const yearsOfExperienceRef = document.getElementById('yearsOfExperience');
  const currentYearsOfExperience = today.getFullYear() - YEAR_OF_FIRST_FRONTEND_PROJECT;
  incrementUntilStop(0, currentYearsOfExperience, (counterVal) => {
    yearsOfExperienceRef.innerText = counterVal;
  }, () => {
    yearsOfExperienceRef.classList.add('counter-stopped');
  } );
});

function incrementUntilStop(currentVal = 0, maxCounter, onCounterIncrease, onCounterStop) {
  if (currentVal < maxCounter) {
    setTimeout(() => {
      onCounterIncrease(String(currentVal));
      currentVal++;
      incrementUntilStop(currentVal, maxCounter, onCounterIncrease, onCounterStop);
    }, 100);
  }
  else if (currentVal === maxCounter) {
    setTimeout(() => {
      onCounterIncrease(String(currentVal));
      onCounterStop();
    }, 100);
  }
}


