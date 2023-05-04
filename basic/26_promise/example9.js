const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfiled */
    }, 1000);
});

//resolve 된 후 실행, callback
p.then(() => {
    console.log('1000ms 후에 fulfiled 됩니다.');
})