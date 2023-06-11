

function cifrar(mensagem, casasParaDeslizar) {
    const mensagemEmArray = mensagem.split('');

    const arrayCifrado = mensagemEmArray.map((caractere) => {
        const codigoCaractere = caractere.charCodeAt(0);

        return String.fromCharCode(codigoCaractere + casasParaDeslizar);
    })

    return arrayCifrado.join('');
}

function decifrar(mensagem, casasParaDeslizar) {
    const mensagemEmArray = mensagem.split('');

    const arrayDecifrado = mensagemEmArray.map((caractere) => {
        const codigoDoCaractere = caractere.charCodeAt(0);

        return String.fromCharCode(codigoDoCaractere - casasParaDeslizar);
    })

    return arrayDecifrado.join('');
}

const mensagem = 'este é um teste com a cifra de Cesar';

const mensagemCifrada = cifrar(mensagem, 5);

console.log(`mensagem cifrada: ${mensagemCifrada}`);

const mensagemDecifrada = decifrar(mensagemCifrada, 5);

console.log(`mensagem decifrada: ${mensagemDecifrada}`);

