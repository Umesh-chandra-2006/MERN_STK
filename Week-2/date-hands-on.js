//Task-1
let date= new Date();

//display year
console.log("Year:", date.getFullYear());

//display month (human readable format)
console.log("Month:", date.getMonth()+1);

//display date
console.log("Date:", date.getDate());

//display day
console.log("Day:", date.getDay()+1); 

//display hours, minutes, seconds
console.log("Hours:Minutes:Seconds" , date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

//display in DD-MM-YYYY HH:MM:SS format
console.log("DD-MM-YYYY HH:MM:SS\n",date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

console.log("-----------------------------------------------");

//Task-2
let enrollmentDeadline = new Date("2026-01-20");

//check if enrollment is open or closed
console.log(enrollmentDeadline>new Date()?"Enrollment Open":"Enrollment Closed");

//check if input is a valid date
let input = "2026-02-30";
console.log(new Date(input)?"Valid Date":"Invalid Date");

console.log("-----------------------------------------------");

//Task-3
let dob = "2002-05-15";
let birthDate = new Date(dob);
let currentDate = new Date();

//calculate age
if (currentDate.getMonth() < birthDate.getMonth() ||
  (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
  console.log("Age:", currentDate.getFullYear() - birthDate.getFullYear() - 1);
}   
else {
  console.log("Age:", currentDate.getFullYear() - birthDate.getFullYear());
}
console.log("-----------------------------------------------");