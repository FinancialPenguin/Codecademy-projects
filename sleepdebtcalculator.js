const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
    return 8;
    case 'tuesday':
    return 9;
    case 'wednesday':
    return 7;
    case 'thursday':
    return 8;
    case 'friday':
    return 9;
    case 'saturday':
    return 6;
    case 'sunday':
    return 10;
  }
};

const getActualSleepHours = () => {
return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  console.log('You slept ' + getActualSleepHours() + ' hours this week.');
  console.log('Ideally, you sleep ' + getIdealSleepHours() + ' hours in a week.')
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('You have no sleep debt!');
  } else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (getActualSleepHours() - getIdealSleepHours()) + ' hour(s) extra sleep than needed.');
  } else {
  console.log('You should sleep ' + (getIdealSleepHours() - getActualSleepHours()) + ' hour(s) more.');
  }
};

calculateSleepDebt();
