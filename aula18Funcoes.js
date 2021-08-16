function criarPessoa(nome,sobrenome,idade){ //FUNÇÃO DE 3 PARAMETROS

    return { // RETORNANDO UM OBJETO

        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };


}

const pessoa1 = criarPessoa('Luis','Francisco',15);

console.log(pessoa1);

