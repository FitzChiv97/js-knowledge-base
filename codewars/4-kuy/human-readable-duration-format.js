// Human readable duration format (2 solutions)
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (seconds) {
  const secondstoYears = (s) => Math.floor(s / 31536000);
  const secondsToDays = (s) => Math.floor(s / 86400);
  const secondsToHours = (s) => Math.floor(s / 3600);
  const secondsToMinutes = (s) => Math.floor(s / 60);

  let years = secondstoYears(seconds);
  if (years) {seconds -= years * 31536000};
  
  let days = secondsToDays(seconds);
  if (days) {seconds -= days * 86400};

  let hours = secondsToHours(seconds);
  if (hours) {seconds -= hours * 3600};

  let minutes = secondsToMinutes(seconds);
  if (minutes) {seconds -= minutes * 60};

  let time = '';

  (years > 1)? time += `${years} years`:
  (years == 1)? time += `${years} year`: 
  time += '';

  if(time) {
    (days > 1)? time += `, ${days} days`:
    (days == 1)? time += `, ${days} day`: 
    time += '';
  } else {
    (days > 1)? time += `${days} days`:
    (days == 1)? time += `${days} day`: 
    time += '';
  }

  if(time) {
    (hours > 1)? time += `, ${hours} hours`:
    (hours == 1)? time += `, ${hours} hour`: 
    time += '';
  } else {
    (hours > 1)? time += `${hours} hours`:
    (hours == 1)? time += `${hours} hour`: 
    time += '';
  }

  if(time) {
    (minutes > 1)? time += `, ${minutes} minutes`:
    (minutes == 1)? time += `, ${minutes} minute`: 
    time += '';
  } else {
    (minutes > 1)? time += `${minutes} minutes`:
    (minutes == 1)? time += `${minutes} minute`: 
    time += '';
  }

  if(time) {
    (seconds > 1)? time += ` and ${seconds} seconds`:
    (seconds == 1)? time += ` and ${seconds} second`: 
    time += '';
  } else {
    (seconds > 1)? time += `${seconds} seconds`:
    (seconds == 1)? time += `${seconds} second`: 
    time += '';
  }

  if (!time.includes('and')) {
    time = time.slice(0, time.lastIndexOf(', ')) + 
    time.slice(time.lastIndexOf(', ')).replace(', ', ' and ');
  }

  return (time)? time: 'now';
}

// function formatDuration (seconds) {
//   if (seconds === 0) return 'now';

//   const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
//   const result = [];

//   for(let key in time) {
//     if(seconds > time[key]) {
//       let value = Math.floor(seconds / time[key]);
//       result.push(value += (value > 1)? ' ' + key + 's': ' ' + key);
//       // console.log(seconds);
//       // console.log(seconds % time[key]);
//       seconds = seconds % time[key];
//     }
//   }

//   return (result.length > 1)? result.join(', ').replace(/,([^,]*)$/,' and'+'$1'): res[0]; // OR ' and$1'
// }

console.log(formatDuration(31996059));