import { createHash } from 'crypto';

function criaHash(dado, estrategia) {
    return createHash(estrategia).update(dado).digest('hex');
}

const senhasComuns = [
    'teste',
    '123',
    'senha',
    'senha123',
    'blablabla',
];

const rainbowTable = senhasComuns.map((senha) => {
    return [senha, criaHash(senha, 'md5')];
})

console.log(rainbowTable);

const hashesVazadas = [
    "e7d80ffeefa212b7c5c55700e4f7193e",
    "da24a3060f4505debdf0caece5110f73",
    "b387b3d050797507461c6e4998cd40fc",
    "1a36591bceec49c832079e270d7e8b73"

];

hashesVazadas.map((hashVazada) => {
    rainbowTable.map((parGerado) => {
        if (hashVazada == parGerado[1]) {
            console.log(`a hash ${hashVazada} corresponde à senha ${parGerado[0]}`);
        }
    })
})
