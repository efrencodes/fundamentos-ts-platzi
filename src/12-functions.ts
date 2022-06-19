(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const convertProductToJson = (title: string, sizes?: Sizes) => {
        return {
            title,
            sizes,
        };
    };

    const product1 = convertProductToJson('keyboard', 'S');
    const product2 = convertProductToJson('mouse');

    console.log(product1);
    console.log(product2);
})();
