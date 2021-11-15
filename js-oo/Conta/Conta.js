import {Cliente} from "../Cliente.js";

/**
 * Abstract class
 *
 * @class Conta
 */
export class Conta {
    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(saldoInicial, cliente, agencia){
        if (this.constructor === Conta){
            throw new Error("This class cannot be instantiated");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    /**
     * Abstract method
     *
     * @param valor
     */
    sacar(valor){
        throw new Error("This method must be implemented")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 100) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}