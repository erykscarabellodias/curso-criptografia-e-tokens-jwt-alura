import { createHash } from 'crypto'

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criarHash(senha)
    }

    criarHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }

    autenticar(nome, senha) {
        if (
            (this.criarHash(senha) === this.hash) &&
            (this.nome === nome)
        ) {
            return true;
        }

        return false;
    }
}

const usuario = new Usuario('eryk', '1977');


for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
    if (usuario.autenticar('eryk', senhaTeste.toString())) {
        console.log(`senha ${senhaTeste} autenticou`)
    }
}