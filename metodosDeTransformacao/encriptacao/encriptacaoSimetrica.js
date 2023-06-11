import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const chave = randomBytes(32);
const initializerVector = randomBytes(16);
const mensagem = 'Teste teste teste, Teste teste teste, Teste teste teste, Teste teste teste, Teste teste teste, ';

const cifra = createCipheriv('aes256', chave, initializerVector);
const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(`mensagem cifrada: ${mensagemCifrada}`);

const decifrador = createDecipheriv('aes256', chave, initializerVector);
const mensagemDecifrada = decifrador.update(mensagemCifrada, 'hex', 'utf-8') + decifrador.final('utf-8').toString('utf-8');

console.log(`mensagem decifrada: ${mensagemDecifrada}`);