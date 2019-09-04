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
    console.log("przed wywo\u0142aniem funkcji delayedResponseWithCallback");
    delayedResponseWithCallback(afterWait);
    console.log("po wywo\u0142aniu funkcji calling delayedResponseWithCallback");
}
callDelayedAndWait();
