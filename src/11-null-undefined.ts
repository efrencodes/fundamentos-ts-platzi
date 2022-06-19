(() => {
    let myNull: null;
    let myUndefined: undefined;

    function greeting(name: string | null) {
        let saludo = 'Hola ';
        saludo += name?.toLocaleLowerCase() || 'nobody';
        console.log(saludo);
    }

    greeting('efren');
    greeting(null);
})();
