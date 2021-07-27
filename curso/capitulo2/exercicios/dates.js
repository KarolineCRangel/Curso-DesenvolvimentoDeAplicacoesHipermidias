let day1 = new Date("2020-7-26");
let day2 = new Date();
let difference = day2.getTime() - day1.getTime();

let data = new Date(difference);
let ano = difference / (3600*1000*24)
let mes = data.getMonth();
let dia = data.getDay();

document.write(parseInt(ano/365) + " anos " + mes + " meses e " + dia + " dias" );