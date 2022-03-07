// 'use strict';

// // const bookings = [];
// // const createBooking = function (
// //   flightNum,
// //   numPassengers = 1,
// //   price = numPassengers * 500
// // ) {
// //   // numPassengers = numPassengers ||1;
// //   // price = price ||2600;
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };
// // createBooking('LH123', '3', '300');
// // // createBooking('LH002')
// // console.log(bookings);

// const flight = 'LH123';
// const user = {
//     name:"harry daksh",
//     passport:15935746632,
// }

// const checkIn = function(flight,user){
// console.log(flight,user)
// flight='LJ456'
// user.name='mr. ' + user.name;
// console.log(flight,user)
// if(user.passport === 15935746632){
//     console.log('checked in')
// }else{
//     console.log('unchecked')
// }
// }
// checkIn(flight,user);
// console.log(flight,user)

// const passenger = user;

// const newPassport = function (user) {
//     user.passport = Math.trunc(Math.random()*10000000000)

// }

// newPassport(user);
// console.log(user)
// checkIn(flight,user)
                                            //higher order fun
// const oneWord = function(str){
//     return str.replace(/ /g,'').toLowerCase();
// }
// const upperFirstWord = function(str){
//     const [first,...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ')

// }
// const transformers = function(str,fn){
// console.log(`Original string : ${str}`);
// console.log(`transformed string: ${fn(str)} `)
// console.log(`transformed by: ${fn.name} `)
// }
// transformers('javascript is the best',upperFirstWord);
// transformers('javascript is the best',oneWord);




