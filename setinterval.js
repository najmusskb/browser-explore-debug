// coltei thakbe 

// console.log('first');
// console.log('second');
// console.log('third');

// setInterval(() => {
//     console.log('forth')
// }, 1500)


// console.log('five');







// clar setinterval 

console.log('first');
console.log('second');

let second = 0;
const setIntervalid = setInterval(() => {

    console.log(++second);
    if (second === 10) {


        clearInterval(setIntervalid);
    }

}, 500)