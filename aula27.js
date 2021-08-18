//Operador ternário

const pontuacao = 1000;
const statusUsuario = pontuacao>=1000 ? 'Usuario VIP': 'Usuario Comum'; // Teste logico ? Condição A : Condição B

const corSelecionada = 'Gray';
const corPadrao      = corSelecionada || 'Black'; // Seleciona a cor do usuário caso exista, se não escolherá a cor padrão setada.

