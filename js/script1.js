const amigos = ["Pedro", "Ana", "Clara"];
const idades = [15, 16, 15];

let tam = amigos.length
console.log(`Amigos: ${amigos}`)
console.log(`Quantidade: ${tam}`);
console.log(`Primeiro: ${amigos[0]}`);
console.log(`Ultimo: ${amigos[tam-1]}`);
console.log(`Dois Primeiros: ${amigos.slice(0,2)}`)
//Percorrendo um array simples
for(let i = 0; i<amigos.length; i++){
    let nome = amigos[i] // Nome
    console.log(`Nome: ${nome}`);
}

//Percorrendo um Array de Arrays(Matriz)
for(let i = 0; i<agenda.length; i++){
    let item = agenda[i] //[Nome, Idade]
    let nome = item[0] //Nome
    let idade =  item[1] //Idade
    //console.log(agenda[i]);
    console.log(`Nome: ${nome} | Idade: ${idade}`);
}
