// Jonas updated the JS Course with new material..

// Coding Challenge # 2 With AI

/* 
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:

1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

console.log("Indeedly doodly Neighborino");

const testData = [7.5, 8, 6.5, 0, 8.5, 5, 0];

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function calcHours(arr) {
  const totalHoursWorked = arr.reduce((acc, curVal) => acc + curVal);
  // console.log(`Total hours worked: ${totalHoursWorked}`);

  const averageDailyHours = parseFloat(
    (totalHoursWorked / arr.length).toFixed(1)
  );
  // console.log(`Average daily hours: ${averageDailyHours}`);

  const maxHours = Math.max(...arr);
  const maxIndex = arr.indexOf(maxHours);
  const dayWithMostHours = weekdays[maxIndex];
  // console.log(`Day with most hours worked: ${dayWithMostHours}`);

  const numberOfDaysWorked = arr.filter((cur) => cur > 0).length;
  // console.log(`Number of days worked: ${numberOfDaysWorked}`);

  const wasFulltime = totalHoursWorked >= 35 ? true : false;
  // console.log(`Full time status: ${wasFulltime}`);

  return {
    totalHoursWorked,
    averageDailyHours,
    dayWithMostHours,
    numberOfDaysWorked,
    wasFulltime,
  };
}

console.log(calcHours(testData));
