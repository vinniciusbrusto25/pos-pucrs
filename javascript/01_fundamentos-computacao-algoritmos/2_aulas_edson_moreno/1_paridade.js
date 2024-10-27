function paridade(limiteMaximo) {
    for (let i=0; i<limiteMaximo; i++) {
        if (i%2 == 0) {
            console.log(`${i} é par`);
        } else {
            console.log(`${i} é impar`);
        }
    }
}

paridade(10);