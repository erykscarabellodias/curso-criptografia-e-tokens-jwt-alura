import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'

class Usuario {
    constructor(usuario, senha) {
        this.usuario = usuario;
        [this.sal, this.senhaHasheada] = this.criarHashComSal(senha).split(':');

    }

    criarHashComSal(senha) {
        const sal = randomBytes(16).toString('hex');

        const senhaHasehada = scryptSync(senha, sal, 64).toString('hex');

        return `${sal}:${senhaHasehada}`
    }

    autentica(usuario, senha) {
        if (usuario !== this.usuario) {
            return false
        }

        const hashGerada = scryptSync(senha, this.sal, 64);
        const hashReal = Buffer.from(this.senhaHasheada, 'hex');

        const hashesCorrespondem = timingSafeEqual(hashGerada, hashReal);

        if (!hashesCorrespondem) {
            return false;
        }

        return true;
    }
}

const usuario = new Usuario('erykelme', 'senha');

console.log(usuario)

console.log('Usuário autenticou: ' + usuario.autentica('erykelme', 'senha'))