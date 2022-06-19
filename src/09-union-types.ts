(() => {
    let userId: string | number;
    userId = 'efren';
    userId = 3.1416;

    function greeting(myText: string | number) {
        if (typeof myText === 'string') {
            console.log(myText.toLowerCase());
        } else {
            console.log(myText.toFixed(1));
        }
    }
    greeting('efren');
    greeting(3.1416);
})();
