const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

const [num1, num2, ...outros] = [1, 2, 3, 4, 5];

const [nome1 = 'Ju'] = [];

const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone =
    {...pessoa, telefone: 123456789}

const { nome } = pessoa;

function imprimeDados({ nome, idade }) {
    console.log(nome, idade)
}

imprimeDados(pessoa);

console.log(nome);