// Dates 

let myDate = new Date()

// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());

// let myCreateDate = new Date(2023,0,14,);
// let myCreateDate = new Date(2024, 2, 2, 20, 57);
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("03-02-2024");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default', {
    weekday : "long"
}))
