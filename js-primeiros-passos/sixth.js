console.log("Trabalhando com listas");

const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`,
)

listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis:");
console.log(listaDeDestinos)

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);