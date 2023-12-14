export const retornarValorString = (valor: number) => {
    let novoValor = valor.toLocaleString().split('.')
    if (novoValor[0].length === 4) {

        return ` ${novoValor}`;

    }
    else {
        return `${novoValor}`;
    }

}

export const retornaPrimeiroUltimoNome = (valor: string) => {
    let novoValor = valor.toLocaleString().split(' ')
    return `${novoValor[0]} ${novoValor[novoValor.length -1]}`;

}

