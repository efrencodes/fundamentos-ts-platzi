(() => {
    let prices = [1, 2, 3, 4, 5, 6, 7, 'hola', true];
    // El array es asignado con un string. number, boolean.
    let products: (string | number | boolean)[] = ['hola', true];
    products.push(1);
})();
