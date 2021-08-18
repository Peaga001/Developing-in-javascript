function calculaIMC(){

  const form = document.querySelector('#formulario');
  const div  = document.querySelector('#resultado');

  function enviandoForm(evento){

    evento.preventDefault();

    const inputPeso     = form.querySelector('#peso');
    const inputAltura   = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    function calculandoIMC(peso,altura){

      const imc = peso/(altura*altura);

      let resultado = "";

      if(imc<=18.5){
        resultado = "Abaixo do peso";
      }

      else if(imc>=18.6 && imc<=24.9){
        resultado = "Peso Normal";
      }

      else if(imc>=25 && imc<=29.9){
        resultado = "Sobrepeso";
      }

      else if(imc>=30 && imc<=34.9){
        resultado = "Obesidade grau 1";
      }

      else if(imc>=35 && imc<=39.9){
        resultado = "Obesidade grau 2";
      }

      else{
        resultado = "Obesidade grau 3";
      }
      
      return 'O seu IMC é: '+imc.toFixed(2)+' ('+resultado+').'; //toFixed(2) -- Formatando em duas casas decimais.
      
    }

    function addParagrafo(){

      div.innerHTML='';
      const p = document.createElement('p');  //Criando elemento parágrafo 
      div.appendChild(p); //Inserindo o parágrafo na div

      
      if(!peso){

       p.innerHTML = 'Peso inválido!';
       p.classList.add('bad'); // Add classe bad ao paragráfo
       return;
       
      }

      else if(!altura) {

        p.innerHTML = 'Altura inválida';
        p.classList.add('bad'); // Add classe bad ao paragráfo
        return;
         

      }

      else{

        const statusFinal = calculandoIMC(peso,altura);

        p.classList.add('paragrafo-resultado'); // Add classe Ok ao parágrafo criado
        p.innerHTML += `${statusFinal}`;

      }
    }

    addParagrafo();

    

  }

  form.addEventListener('submit',enviandoForm);

}

calculaIMC();