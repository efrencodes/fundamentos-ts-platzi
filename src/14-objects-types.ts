(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = { title: string; sizes?: Sizes };

    const products: Product[] = [];
    const addProduct = (data: Product) => {
        products.push(data);
    };

    addProduct({ title: 'mouse', sizes: 'M' });
    console.log(products);
    addProduct({ title: 'mouse' });
    console.log(products);
})();
