import { createHash } from 'crypto'
import { exit } from 'process';

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

const usuario = new Usuario('eryk', 'senha123');

const senhasProvaveis = [
    'teste',
    '123',
    'senha',
    'senha123',
    'blablabla',
];

senhasProvaveis.every((senha) => {
    if (usuario.autenticar('eryk', senha)) {
        console.log(`autenticou com a senha: ${senha}`)
        return false;
    } else {
        return true;
    }
})