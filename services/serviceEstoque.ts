import { error } from 'console';
import {readCSV, writeCSV} from '../models/operationsCSV';
import {Data} from '../models/dataInterface'
import fs from 'fs'

class estoqueOps {

    async adicionar(data: Data) {
        const dataAtual = await readCSV('../estoque/estoque.csv');
        const verificador = dataAtual.find(d => d.nome == data.nome);

        if(verificador) {
                throw new Error("Já existe um item com esse nome.")
        }
        if(data.nome == null) {
            throw new Error("O nome dado é inválido.")
        }

        await writeCSV('../models/estoque.csv', [data]);
    };

    async excluir(data: Data) {
        const itens = await readCSV('../models/estoque.csv');
        const verificador = itens.findIndex((item) => item.nome == data.nome);
        if(!verificador) {
            throw new Error("O item não foi encontrado.")
        }

        itens.splice(verificador, 1);
        writeCSV('../models/estoque.csv', itens);

    };

    async listaItens(){
        return await readCSV('../models/estoque.csv');
    };

    async somaValores() {
        let soma = 0;
        const itens = await readCSV('../models/estoque.csv');

        for(const item of itens) {
            soma += item.valor * item.quantidade;
        }

        return soma;
    };

    async somaPesos() {
        let somaPesos = 0;
        const itens = await readCSV('../models/estoque.csv');

        for(const item of itens) {
            somaPesos += item.peso * item.quantidade;
        }

        return somaPesos;
    };

    // de agora em diante, quantidadeEstoque é usada para gravar a quantidade de PRODUTOS, não o total de itens do estoque. (perdão pela ambiguidade, só vi quando fui revisar)

    async mediaValor() {
        let valorTotal = 0;
        let quantidadeEstoque = 0;
        const itens = await readCSV('../models/estoque.csv');

        for(const item of itens) {
            valorTotal =+ item.valor;
            quantidadeEstoque++;
        }

        return valorTotal / quantidadeEstoque;
    };

    async mediaPeso() {
        let pesoTotal = 0;
        let quantidadeEstoque = 0;
        const itens = await readCSV('../models/estoque.csv');

        for(const item of itens) {
            pesoTotal =+ item.peso;
            quantidadeEstoque++;
        }

        return pesoTotal / quantidadeEstoque;
    };

    async quantidadeTotal() {
        let quantidadeTotal = 0;
        const itens = await readCSV('../models/estoque.csv');

        for(const item of itens) {
            quantidadeTotal += item.quantidade;
        }

        return quantidadeTotal;
    };

    async quantidadeProdutos() {
        let quantidadeEstoque = 0;
        const itens = await readCSV('../models/estoque.csv');

        for(const item of itens) {
            quantidadeEstoque++;
        }

        return quantidadeEstoque;
    };

}

export {estoqueOps};

