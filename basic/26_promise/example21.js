// Promise.race([프로미스 객체들]);

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, 1000);
    })
}

Promise.race([p(1000), p(2000), p(3000)])
    .then((message) => {
        console.log('처음 fulfilled 된 이후에 실행됩니다.', message);
    })