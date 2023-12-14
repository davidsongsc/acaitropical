export const retornarValorString = (valor: number) => {
    let novoValor = valor.toLocaleString().split('.')
    if (novoValor[0].length === 4) {

        return ` ${novoValor}`;

    }
    else {
        return `${novoValor}`;
    }

}