"use strict";
function delayedPromise() {
    return new Promise((resolve, reject) => {
        function afterTimeout() {
            resolve();
        }
        setTimeout(afterTimeout, 1000);
    });
}
function callDelayedPromise() {
    console.log(`wywołujemy obietnicę delayedPromise`);
    delayedPromise().then(() => { console.log(`delayedPromise.then()`); });
}
callDelayedPromise();
