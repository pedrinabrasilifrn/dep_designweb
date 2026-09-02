let nome = prompt("Digite seu nome:"); //String
let nasc = Number(prompt("Digite seu ano de nascimento:"));
//nasc = Number(nasc)
let viva = confirm("Clique em ok se estiver viva. Caso contrário cancelar."); //Boolean
let altura = prompt("Digite sua altura:"); 
altura = Number(altura);
let sexo = prompt("Digite seu sexo:");
let peso = prompt("Digite seu peso:");
peso = Number(peso);
let imc = peso/altura; //NaN (Not a Number) - Valor inválido

console.log("nome", typeof(nome));
console.log("nasc", typeof(nasc));
console.log("viva", typeof(viva));
console.log("altura", typeof(altura));
console.log("sexo", typeof(sexo));
console.log("peso", typeof(peso));
console.log("imc", typeof(imc));

let msg = `Nome: ${nome}\nAno de Nascimento: ${nasc}\nViva: ${viva}`;
msg = msg + `\nAltura: ${altura}\nSexo: ${sexo}\nPeso: ${peso}`;
msg = msg + `\nIMC: ${imc.toFixed(2)}`;

alert(msg);

