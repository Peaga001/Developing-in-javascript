//Atribuição via desestruturação Objetos

const pessoa = { // Criando um objeto

    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade : 21,
    
        endereco: { //Criando outro objeto dentro do primeiro
            rua: 'Rua 1',
            numero: '123',
        }
};

//Atribuição via desestruturação 

const {nome, sobrenome, idade} = pessoa;
console.log(nome,sobrenome,idade);

