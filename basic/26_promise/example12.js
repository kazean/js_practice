/*
executor의 resolve함수를 실행할때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있습니다.
executor의 reject함수를 실행할때 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있습니다. Error 객체 이용
*/
function p() {
    return new Promise((resolve, reject) => {
        /* pending */
        setTimeout(() => {
            // resolve('hello');
            reject(new Error('bad'));
        }, 1000);
    });
}

p()
    .then((message) => {
        console.log('1000ms 후에 fulfiled 됩니다.', message);
    })
    .catch((error) => {
        console.log('1000ms 후에 rejected 됩니다.', error);
    });