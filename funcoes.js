function addLinha(){

    const bloco = document.querySelector('.bloco');

    let linha = document.createElement('div');
    linha.classList.add('linhas'); // Add classe ao paragráfo

    linha.innerHTML+=`<img src='img/Azul.jpg' alt=''  class='celula'>`;
    linha.innerHTML+=`<img src='img/verde.jpg' alt=''  class='celula'>`;
    linha.innerHTML+=`<img src='img/vermelho.jpg' alt=''  class='celula'>`;

    bloco.appendChild(linha);

}

