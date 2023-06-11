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

const usuario = new Usuario('eryk', 'erykelme');

const antenticou = usuario.autenticar('eryk', 'henriquelme');

console.log('autenticou: ' + antenticou)