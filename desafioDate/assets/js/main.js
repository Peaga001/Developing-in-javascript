const h1 = document.querySelector('.container h1');

function exibeData(){
  
    const data = new Date('2019-10-07 22:52');

    console.log(data.toString());


    const dia         = data.getDate();
    const mes         = data.getMonth();
    const ano         = data.getFullYear();
    const diaDaSemana = data.getDay();
    const hora        = data.getHours();
    const min         = data.getMinutes();

    switch(diaDaSemana){

        case 0:
        diaEmExtenso = "Domingo";
        break;

        case 1:
        diaEmExtenso = "Segunda-feira";
        break;

        case 2:
        diaEmExtenso = "Terça-feira";
        break;

        case 3:
        diaEmExtenso = "Quarta-feira";
        break;

        case 4:
        diaEmExtenso = "Quinta-feira";
        break;

        case 5:
        diaEmExtenso = "Sexta-feira";
        break;

        case 6:
        diaEmExtenso = "Sabado";
        break;

        default:
        diaEmExtenso ="";
        

    }

    switch(mes){

        case 0:
        mesEmExtenso = "Janeiro";
        break;

        case 1:
        mesEmExtenso = "Fevereiro";
        break;

        case 2:
        mesEmExtenso = "Março";
        break;

        case 3:
        mesEmExtenso = "Abril";
        break;

        case 4:
        mesEmExtenso = "Maio";
        break;

        case 5:
        mesEmExtenso = "Junho";
        break;

        case 6:
        mesEmExtenso = "Julho";
        break;

        case 7:
        mesEmExtenso = "Agosto";
        break;

        case 8:
        mesEmExtenso = "Setembro";
        break;

        case 9:
        mesEmExtenso = "Outubro";
        break;

        case 10:
        mesEmExtenso = "Novembro";
        break;

        case 11:
        mesEmExtenso = "Dezembro";
        break;

        default:
        mesEmExtenso ="";
        

    }

    return `${diaEmExtenso}, ${dia} de ${mesEmExtenso} de ${ano}<br>${hora}:${min}`;


}

const result = exibeData();
h1.innerHTML = `<strong>${result}</strong>`;
