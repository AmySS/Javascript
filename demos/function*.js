(()=> {
    function* generateNumber (bounder) {
        let initial = bounder;
        while(initial > 0) {
            yield initial--;
        }
    }
    let generator = generateNumber(100);
    function recursive () {
        let result = generator.next();
        console.log(result);
        if(result.done == false){
            setTimeout(()=> {
                recursive();
            }, 50);
        }
    }
    recursive();
})();