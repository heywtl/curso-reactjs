import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);

const contaCorrente2 = new ContaCorrente(cliente2, 1002);

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrente2);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// const conta = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
// console.log(conta);