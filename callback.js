const waitAndPrint = (waitForSeconds, callBackFunction) => {
    setTimeout(() => {
        if(waitForSeconds % 2 == 0)
        {
            callBackFunction(`${waitForSeconds}. Error`);
        }
        else
        {
            callBackFunction(`${waitForSeconds}. Wait complete`);
        }

        console.log(`I waited for: ${waitForSeconds} seconds`);
    }, (waitForSeconds * 1000))
};


const executeAfterDone = (message) => {
    console.log(message);
};


(function (){ 
    let promise_3 = waitAndPrint(3, executeAfterDone);
    let promise_2 = waitAndPrint(2, executeAfterDone);
    let promise_1 = waitAndPrint(1, executeAfterDone);
})();