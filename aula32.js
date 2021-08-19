//Atribuição via desestruturação

let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1,2,3]; //Criando um array e atribuindo 3 valores
[a,b,c] = numeros; //Passando os valores do array para as variáveis

console.log(a,b,c); //1 2 3 

const letras = [b,c,a];//Mudando a ordem dos valores através do array
[a,b,c] = letras;//Atribuindo a eles mesmos

console.log(a,b,c); //2 3 1



