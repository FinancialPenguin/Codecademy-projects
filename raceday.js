let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistration = false;
const ageRegistration = 18;

if (earlyRegistration && ageRegistration >= 18) {
  raceNumber +=1000;
};

if (earlyRegistration && ageRegistration >= 18) {
 console.log(`Runner ${raceNumber}, you will start at 9:30 AM.`);
} else if (!earlyRegistration && ageRegistration >= 18) {
  console.log(`Runner ${raceNumber}, you will start at 11:00 AM.`);
  } else if (ageRegistration < 18) {
    console.log(`Runner ${raceNumber}, you will start at 12:30 AM.`);
  }
