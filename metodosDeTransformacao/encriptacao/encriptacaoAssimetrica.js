import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto'

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },

    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

console.log(publicKey, privateKey)

const mensagem = 'Esta mensagem foi encriptada assimetricamente';
const mensagemEncriptada = publicEncrypt(publicKey, Buffer.from(mensagem));

console.log(`Mensagem encriptada: ${mensagemEncriptada.toString('hex')}`);

const mensagemDecriptada = privateDecrypt(privateKey, mensagemEncriptada);
console.log(`Mensagem decriptada: ${mensagemDecriptada}`);