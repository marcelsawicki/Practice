"use strict";
function delayedResponseWithCallback(callback) {
    function delayedAfterTimeout() {
        console.log('delayedAfterTimeout');
        callback();
    }
    setTimeout(delayedAfterTimeout, 1000);
}
function callDelayedAndWait() {
    function afterWait() {
        console.log('afterWait');
    }
    console.log(`przed wywołaniem funkcji delayedResponseWithCallback`);
    delayedResponseWithCallback(afterWait);
    console.log(`po wywołaniu funkcji calling delayedResponseWithCallback`);
}
callDelayedAndWait();
