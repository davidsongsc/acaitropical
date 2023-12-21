import { Produto } from "../../redux/types";

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
    return `${novoValor[0]} ${novoValor[novoValor.length - 1]}`;

}



export const retornaVolumeProduto = (produto: Produto, quantidade: number) => {
    if (produto.volume[0] === 'ml') {
        const vLor = produto.volume[1] * quantidade;

        if (vLor >= 1000) {
            const litros = vLor / 1000
            return `${litros}L`;
        }
        else {
            return `${(vLor / 1000).toFixed(1)}L`;
        }
    }
}

export const retornarValorTaxaEntrega = (distancia: number, tipo: string) => {
    if (tipo === 'moto') {
        return 1.05 * distancia + 4.25;
    }
    if (tipo === 'bike') {
        return 0.95 * distancia + 2.45;
    }
    return 0; // Adicione um valor padrão ou lógica adicional se necessário
};