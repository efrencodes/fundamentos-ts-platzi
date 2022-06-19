(() => {
    type UserID = string | number;
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    function greeting(myText: UserID, sizes: Sizes) {
        if (typeof myText === 'string') {
            console.log(myText.toLowerCase(), sizes);
        } else {
            console.log(myText.toFixed(1), sizes);
        }
    }

    greeting(3.1416, 'S');
    greeting('efren', 'M');
})();
