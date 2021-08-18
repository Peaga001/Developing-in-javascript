function calculaIMC(){

  const form     = document.querySelector('#formulario');
  

  function enviandoForm(evento){

    evento.preventDefault();

    const inputPeso     = form.querySelector('#peso');
    const inputAltura   = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    function calculandoIMC(peso,altura){

      console.log(peso,altura);

      const imc =peso/(altura*altura);

      console.log(imc);

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
      
      return resultado;
      
    }

    calculandoIMC(peso,altura);

  }

  form.addEventListener('submit',enviandoForm);

}

calculaIMC();