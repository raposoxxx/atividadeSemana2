import { estoqueOps } from "../services/serviceEstoque";
import { Data } from "../models/dataInterface";
import {readCSV, writeCSV} from '../models/operationsCSV'


export async function adicionarItem(data: Data) {
    try {
        await estoqueOps.adicionar(data);
        console.log("SUCESSO!")
    } catch (error) {
        console.error(error)
    }
    
}

export async function excluirItem(data: Data) {
    try {
        await estoqueOps.excluir(data);
        console.log("SUCESSO!")
    } catch (error) {
        console.error(error)
    }
}

export async function listarItens() {
    try {
        const itens = await estoqueOps.listaItens(data);
        console.log("Aqui estão: ", itens)
    } catch (error) {
        console.error(error)
    }
}

export async function somarValores() {
    try {
        const soma = await estoqueOps.somaValores();
        console.log("Aqui está: ", soma);
    } catch(error) {
        console.error(error);
    }
}

export async function somarPesos() {
    try {
        const soma = await estoqueOps.somaPesos();
        console.log("Aqui está: ", soma);
    } catch(error) {
        console.error(error)
    }
}

export async function valorMedio() {
    try {
        const media = await estoqueOps.mediaValor();
        console.log("Aqui está: ", media);
    } catch(error) {
        console.error(error);
    }
}

export async function pesoMedio() {
    try {
        const media = await estoqueOps.mediaPeso();
        console.log("Aqui está: ", media);
    } catch(error) {
        console.error(error);
    }
}

export async function totalEstoque() {
    try {
        const total = await estoqueOps.quantidadeTotal();
        console.log("Aqui está: ", total);
    } catch(error) {
        console.error(error);
    }
}

export async function totalProdutos() {
    try {
        const total = await estoqueOps.quantidadeProdutos();
        console.log("Aqui está: ", total);
    } catch(error) {
        console.error(error);
    }
}