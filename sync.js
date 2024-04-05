
(() => { 
    setTimeout(() => {
        console.log(`I waited for: ${3} seconds`);


        
        setTimeout(() => {
            console.log(`I waited for: ${2} seconds`);



            setTimeout(() => {
                console.log(`I waited for: ${1} seconds`);
            }, (1 * 1000))
        }, (2 * 1000))
    }, (3 * 1000))
})();