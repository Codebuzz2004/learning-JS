let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0 , 23 , 5, 30 , 45)
let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));// time in seconds

let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default',{
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    })