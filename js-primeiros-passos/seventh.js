console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`,
)

const idadeComprador = 15;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos)

if(idadeComprador >= 18 || estaAcompanhada){
    console.log("Boa viagem!")
    listaDeDestinos.splice(1, 1);
} else{
    console.log("Não é maior de idade, não posso vender")
}

console.log(listaDeDestinos);