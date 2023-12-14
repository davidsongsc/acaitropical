import { Produto, TipoProduto } from "./types";


interface listaTodosProdutos {
    todosProdutos: Produto[]
}



const tipoProdutosTeste: TipoProduto[] = [
    {
        id: 0,
        nome: 'Açai'
    },
    {
        id: 1,
        nome: 'Biscoitos'
    }, {
        id: 2,
        nome: 'Doces'
    }, {
        id: 3,
        nome: 'Salgados'
    }, {
        id: 4,
        nome: 'Bebidas'
    },
]

const dadosProdutosTeste: Produto[] = [
    {
        id: 0,
        nome: 'Açai B. 300ml',
        descricao: 'Açai especial, batido com banana.',
        img: 'https://st2.depositphotos.com/17524768/45085/i/450/depositphotos_450859886-stock-photo-brazilian-frozen-plastic-cup-condensed.jpg',
        valor: 7.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 1,
        nome: 'Açai B. 500ml',
        descricao: 'Açai especial, batido com banana.',
        img: 'https://yumethesushiacai.ssapps.com.br/_core/_uploads/85/2023/03/1632250323d94c6jae8j.jpeg',
        valor: 9.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },

    {
        id: 2,
        nome: 'Açai B. 700ml',
        descricao: 'Açai especial, batido com banana.',
        img: 'https://yumethesushiacai.ssapps.com.br/_core/_uploads/85/2023/03/1632250323d94c6jae8j.jpeg',
        valor: 11.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 3,
        nome: 'Açai M. 300ml',
        descricao: 'Açai especial, batido com morango.',
        img: 'https://st2.depositphotos.com/17524768/45085/i/450/depositphotos_450859886-stock-photo-brazilian-frozen-plastic-cup-condensed.jpg',
        valor: 7.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 4,
        nome: 'Açai M. 500ml',
        descricao: 'Açai especial, batido com morango.',
        img: 'https://yumethesushiacai.ssapps.com.br/_core/_uploads/85/2023/03/1632250323d94c6jae8j.jpeg',
        valor: 9.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },

    {
        id: 5,
        nome: 'Açai 700ml',
        descricao: 'Açai especial, batido com morango.',
        img: 'https://yumethesushiacai.ssapps.com.br/_core/_uploads/85/2023/03/1632250323d94c6jae8j.jpeg',
        valor: 11.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 6,
        nome: 'Açai M. 300ml',
        descricao: 'Açai especial, batido com mamão, banana e morango.',
        img: 'https://st2.depositphotos.com/17524768/45085/i/450/depositphotos_450859886-stock-photo-brazilian-frozen-plastic-cup-condensed.jpg',
        valor: 7.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 7,
        nome: 'Açai 500ml',
        descricao: 'Açai especial, batido com mamão, banana e morango.',
        img: 'https://yumethesushiacai.ssapps.com.br/_core/_uploads/85/2023/03/1632250323d94c6jae8j.jpeg',
        valor: 9.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },

    {
        id: 8,
        nome: 'Açai 700ml',
        descricao: 'Açai especial, batido com mamão, banana e morango.',
        img: 'https://yumethesushiacai.ssapps.com.br/_core/_uploads/85/2023/03/1632250323d94c6jae8j.jpeg',
        valor: 11.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[0]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 9,
        nome: 'Piraquê Chocolate',
        descricao: 'Farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, maltodextrina, soro de leite em pó, açúcar invertido, extrato de malte, amido de milho*, sal, emulsificantes: lecitina de soja e estearoil lactilato de cálcio, aromatizantes, fermentos químicos: bicarbonato de sódio e fosfato monocálcico, antioxidante ácido cítrico e corante cúrcuma.',
        img: 'https://piraque.com.br/wp-content/uploads/2020/11/chocolate.png',
        valor: 4.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[1]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 10,
        nome: 'Piraquê Morango',
        descricao: 'Farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, maltodextrina, soro de leite em pó, açúcar invertido, extrato de malte, amido de milho*, sal, emulsificantes: lecitina de soja e estearoil lactilato de cálcio, aromatizantes, fermentos químicos: bicarbonato de sódio e fosfato monocálcico, antioxidante ácido cítrico e corante cúrcuma.',
        img: 'https://piraque.com.br/wp-content/uploads/2020/11/morango.png',
        valor: 4.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[1]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 11,
        nome: 'Piraquê Limão',
        descricao: 'Farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, maltodextrina, soro de leite em pó, açúcar invertido, extrato de malte, amido de milho*, sal, emulsificantes: lecitina de soja e estearoil lactilato de cálcio, aromatizantes, fermentos químicos: bicarbonato de sódio e fosfato monocálcico, antioxidante ácido cítrico e corante cúrcuma.',
        img: 'https://cdn-cosmos.bluesoft.com.br/products/7896024760371',
        valor: 4.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[1]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 12,
        nome: 'Piraquê Brigadeiro',
        descricao: 'Farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, maltodextrina, soro de leite em pó, açúcar invertido, extrato de malte, amido de milho*, sal, emulsificantes: lecitina de soja e estearoil lactilato de cálcio, aromatizantes, fermentos químicos: bicarbonato de sódio e fosfato monocálcico, antioxidante ácido cítrico e corante cúrcuma.',
        img: 'https://piraque.com.br/wp-content/uploads/2020/11/brigadeir.png',
        valor: 4.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[1]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 13,
        nome: 'Piraquê Coco',
        descricao: 'Farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, maltodextrina, soro de leite em pó, açúcar invertido, extrato de malte, amido de milho*, sal, emulsificantes: lecitina de soja e estearoil lactilato de cálcio, aromatizantes, fermentos químicos: bicarbonato de sódio e fosfato monocálcico, antioxidante ácido cítrico e corante cúrcuma.',
        img: 'https://piraque.com.br/wp-content/uploads/2020/11/Piraque-Biscoito-Recheado-Coco-Baunilha-160g.png',
        valor: 4.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[1]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 14,
        nome: 'Piraquê Pretty',
        descricao: 'Farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, maltodextrina, soro de leite em pó, açúcar invertido, extrato de malte, amido de milho*, sal, emulsificantes: lecitina de soja e estearoil lactilato de cálcio, aromatizantes, fermentos químicos: bicarbonato de sódio e fosfato monocálcico, antioxidante ácido cítrico e corante cúrcuma.',
        img: 'https://piraque.com.br/wp-content/uploads/2020/11/pretty.png',
        valor: 4.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[1]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 15,
        nome: 'Piraquê Abacaxi',
        descricao: 'Farinha de trigo enriquecida com ferro e ácido fólico, açúcar, gordura vegetal, maltodextrina, soro de leite em pó, açúcar invertido, extrato de malte, amido de milho*, sal, emulsificantes: lecitina de soja e estearoil lactilato de cálcio, aromatizantes, fermentos químicos: bicarbonato de sódio e fosfato monocálcico, antioxidante ácido cítrico e corante cúrcuma.',
        img: 'https://piraque.com.br/wp-content/uploads/2020/11/abacaxi.png',
        valor: 4.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[1]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 16,
        nome: 'Pastel V',
        descricao: '5 Unidades pastel Queijo.',
        img: 'https://i.pinimg.com/originals/cb/16/be/cb16be0c94c4dfdda75c47bcecdeff8d.png',
        valor: 25.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 17,
        nome: 'Pastel VIII',
        descricao: '8 Unidades pastel Carne.',
        img: 'https://i.pinimg.com/originals/cb/16/be/cb16be0c94c4dfdda75c47bcecdeff8d.png',
        valor: 35.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 18,
        nome: 'Pastel XII',
        descricao: '12 Unidades pastel Frango.',
        img: 'https://i.pinimg.com/originals/cb/16/be/cb16be0c94c4dfdda75c47bcecdeff8d.png',
        valor: 49.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 19,
        nome: 'Coxinha X',
        descricao: '10 Unidades salgadinho coxinha (sabor) a escolha.',
        img: 'https://cdn.2rscms.com.br/uploads/749/layout/conx.png',
        valor: 19.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 20,
        nome: 'Coxinha XX',
        descricao: '20 Unidades salgadinho coxinha (sabor) a escolha.',
        img: 'https://cdn.2rscms.com.br/uploads/749/layout/conx.png',
        valor: 33.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 21,
        nome: 'Coxinha XXX',
        descricao: '30 Unidades salgadinho coxinha (sabor) a escolha.',
        img: 'https://cdn.2rscms.com.br/uploads/749/layout/conx.png',
        valor: 45.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 22,
        nome: 'Salgados',
        descricao: '10 Unidades salgadinho (sabor) a escolha.',
        img: 'https://lh5.googleusercontent.com/p/AF1QipMoCZwduhw-ngGlbu-sp0tMnglqRC6Hf2rbtNq6=w1440-h893-k-no',
        valor: 9.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 23,
        nome: 'Salgados',
        descricao: '20 Unidades salgadinho (sabor) a escolha.',
        img: 'https://lh5.googleusercontent.com/p/AF1QipMoCZwduhw-ngGlbu-sp0tMnglqRC6Hf2rbtNq6=w1440-h893-k-no',
        valor: 9.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
    {
        id: 24,
        nome: 'Salgados',
        descricao: '30 Unidades salgadinho (sabor) a escolha.',
        img: 'https://lh5.googleusercontent.com/p/AF1QipMoCZwduhw-ngGlbu-sp0tMnglqRC6Hf2rbtNq6=w1440-h893-k-no',
        valor: 9.95,
        quantidade: 2,
        tipo: [tipoProdutosTeste[3]],
        disponibilidade: 10,
        dataHoraCriacao: '2023-01-01T00:00:00',
        idCriadorProduto: 1,
    },
]


const initialState: listaTodosProdutos = {
    todosProdutos: dadosProdutosTeste,
};

const galeriaReducer = (state = initialState, action: any): listaTodosProdutos => {
    switch (action.type) {

        case 'ADD_PRODUTO':

            return {
                ...state,
                todosProdutos: [...state.todosProdutos, action.payload],
            };
        case 'REMOVE_PRODUTO':

            return {
                ...state,
                todosProdutos: state.todosProdutos.filter((produto) => produto.id !== action.payload),
            };

        default:

            return state;
    }
};

export default galeriaReducer;