/*
p 라는 프로미스 객체는 1000ms 후에 fulfiled 됩니다
*/
new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfiled */
    }, 1000);
});