// NaN tambien aplica como tipo de dato "number"
// Datos hexadecimales y binarios tambien son “number” y al mostrarlos en la consola
// son traducidos a su valor en decimal.
// : number no es lo mismo que : Number.
// Creo que cuando usamos la mayuscula se refiere al super prototipo Number
(() => {
    let productPrice = 100;
    console.log('productPrice', productPrice);

    let productInStock: number;
    console.log('productInStock', productInStock);
    if (productInStock > 10) {
        console.log('is greater');
    }

    let discount = parseInt('100');
    console.log('discount', discount);
    if (discount <= 200) {
        console.log('apply');
    } else {
        console.log('not apply');
    }

    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b1010;
    console.log('bin', bin);
})();
