let numero = prompt('Digite seu número');
numero = Number(numero);
const seuNumero =  document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

seuNumero.innerHTML = numero;

texto.innerHTML =`<h4> Seu número é ${numero}. <h4/> <br>`; 
texto.innerHTML +=`<h4> Seu número -3 é ${numero-3}.<h4/><br>`;
texto.innerHTML +=`<h4> Seu número +3 é ${numero +3}.<h4/><br>`;
texto.innerHtml +=`<h4> Raiz quadrada: ${numero ** 0.5} .<h4/><br>`;
texto.innerHtml +=`<h4> ${numero ** 0.5} inteiro é :${Number.isInteger(numero)}.<h4/><br>`;
texto.innerHtml +=`<h4> Arredondando para baixo:  ${Math.floor(numero)}.<h4/><br>`;
texto.innerHtml +=`<h4> Arredondando para cima:  ${Math.ceil(numero)}.<h4/><br>`;
texto.innerHtml +=`<h4> Com duas casas decimais: ${numero.toFixed(2)}.<h4/><br>`;


