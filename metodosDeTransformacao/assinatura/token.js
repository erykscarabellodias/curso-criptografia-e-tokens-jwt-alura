import jwt from 'jsonwebtoken'

const chaveSecreta = 'chave';

const token = jwt.sign(
    {
        sub: 'Eryk',
        id: '1'
    },
    chaveSecreta
);

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)