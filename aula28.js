//Datas

//const data = new Date(2021, 3, 20, 15, 14, 27, 999); // Ano/Mes/Dia - Hora/Minuto/Segundo/Milésimo
/*Meses vão de 0 a 11 (0->Janeiro 11->Dezembro)*/
//console.log(data.toString());

const data = new Date('2021-08-18 16:57:30'); //Formato padrão
console.log('Data: '+data.toString());
console.log('Dia: '+data.getDate());
console.log('Mês: '+data.getMonth());
console.log('Ano: '+data.getFullYear());
console.log('Hora: '+data.getHours());
console.log('Min: '+data.getMinutes());
console.log('Seg: '+data.getSeconds());
console.log('Ms: '+data.getMilliseconds());
console.log('Dia da semana: '+data.getDay());// Domingo=0 / Sabado=6












