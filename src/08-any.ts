// any es un tipo de dato que recibe "cualquier" dato.
(() => {
    let variable: any = '';
    variable = true;
    variable = 1;

    console.log(variable);

    // Se puede cambiar de tipo de dato a otro dato.
    variable = 'HOLA';
    const otherString = (variable as string).toLowerCase();
    console.log(otherString);

    variable = true;
    const otherBoolean = (variable as boolean).valueOf();
    console.log(otherBoolean);

    variable = 122;
    const otherNumber = (<number>variable).toFixed();
    console.log(otherNumber);
})();
