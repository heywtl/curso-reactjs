import {Diretor} from "./Funcionários/Diretor.js";
import {Gerente} from "./Funcionários/Gerente.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";
import {Cliente} from "./Cliente.js";

const diretor = new Diretor('Rodrigo', 10000, 123456789);
diretor.cadastrarSenha("123456");

const gerente = new Gerente('Ricardo', 5000, 987654321);
gerente.cadastrarSenha("123");

const cliente = new Cliente('Lais', 123458967, "456");

const clienteestaLogado = SistemaAutenticacao.login(cliente, "456");
const gerenteestaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(clienteestaLogado);
console.log(diretorestaLogado);
console.log(gerenteestaLogado);