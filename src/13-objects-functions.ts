(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    const products: any[] = [];
    const addProduct = (data: { title: string; sizes?: Sizes }) => {
        products.push(data);
    };

    const addProductWithParameters = (title: string, sizes?: Sizes) => {
        products.push({ title, sizes });
    };

    addProduct({ title: 'mouse', sizes: 'M' });
    console.log(products);
    addProduct({ title: 'mouse' });
    console.log(products);
    addProductWithParameters('mouse');
    console.log(products);
    addProductWithParameters('mouse', 'M');
    console.log(products);
})();
