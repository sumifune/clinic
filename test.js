const moment = require('moment');


// const today = moment().startOf('day')

// console.log(today.toDate());
// console.log(moment(today).endOf('day').toDate());


// let today = moment("2020-12-31");
// console.log(today.toDate());

// let tomorrow = moment("2020-12-31").add(1,'days');
// console.log(tomorrow.toDate());

// let bbbb = moment("2020-12-31").add(2,'days');
// console.log(bbbb.toDate());

// let yesterday = moment().add(-1, 'days');
// console.log(yesterday);


// let date = moment("25-09-2020", "DD-MM-YYYY");

// console.log(moment(date).format('YYYY-MM-DD'));


let a = moment();
console.log(a.add(1,'days').format('DD-MM'));
// console.log(moment(selectedDate).add(date,'days').toDate());