const waitAndPrint = async (waitForSeconds) => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(waitForSeconds % 2 == 0)
            {
                reject(`${waitForSeconds}. Error`);
            }
            else
            {
                resolve(`${waitForSeconds}. Wait complete`);
            }

            console.log(`I waited for: ${waitForSeconds} seconds`);
        }, (waitForSeconds * 1000))
    });

    return myPromise;
};


const executeAfterDone = async (message) => {
    let myPromise = new Promise((resolve, reject) => {
        resolve();
        console.log(message);
    });
};


(async function (){ 
    let promise_3 = waitAndPrint(3);
    let promise_2 = waitAndPrint(2);
    let promise_1 = waitAndPrint(1);

    promise_1.then((result) => {executeAfterDone(result)}).catch((error) => {console.log(error)});
    promise_2.then((result) => {executeAfterDone(result)}, (error) => {console.log(error)});
    promise_3.then((result) => {executeAfterDone(result)}, (error) => {console.log(error)});
})();