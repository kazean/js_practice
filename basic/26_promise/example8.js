const p = new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfiled */
    }, 1000);
});

//resolve 된 후 실행, callback
p.then(() => {

})