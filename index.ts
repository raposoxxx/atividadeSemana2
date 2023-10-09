import { estoqueOps } from "../Semana 2/services/serviceEstoque";
import { Data } from "../Semana 2/models/dataInterface";
import {readCSV, writeCSV} from '../Semana 2/models/operationsCSV';
import readline from "readline/promises";
import { adicionarItem, excluirItem, listarItens, pesoMedio, somarPesos, somarValores, totalEstoque, totalProdutos, valorMedio } from "./controllers/controleEstoque";

function menu () {
    console.log("Escolha uma opção:");
    console.log("1. Adicionar Item ao Inventário");
    console.log("2. Remover Item do Inventário");
    console.log("3. Listar Itens do Inventário");
    console.log("4. Ver Valor Total do Inventário");
    console.log("5. Ver Peso Total do Inventário");
    console.log("6. Calcular Média de Valor dos Itens");
    console.log("7. Calcular Média de Peso dos Itens");
    console.log("8. Ver Quantidade Total de Itens no Inventário");
    console.log("9. Ver Quantidade Total de Produtos no Inventário");
    console.log("0. Sair");
}

function main () {

    //não consegui extrair as informações do tipo Data de jeito nenhum, essa parte tirei da reunião e do gabarito

    const criarInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function perguntar(pergunta: string) : Promise<string> {
        return new Promise((resolve) => {
            criarInterface.question(pergunta, (resposta) => {
                resolve(resposta);
            });
        });
    }

    


    menu();
    const escolha = prompt("Opção: ");

    const data: Data = {
        nome: "",
        peso: 0.0,
        valor: 0.0,
        quantidade: 0,
    };

    switch(escolha) {
        case '1':
            data.nome = perguntar("Nome: ");
            data.peso = parseFloat(perguntar("Peso: "));
            data.quantidade = parseInt(perguntar("Quantidade: "));
            data.valor = parseFloat(perguntar("Valor: "))

            adicionarItem(data);

        case '2':
            data.nome = perguntar("Nome: ");

            excluirItem(data);

        case '3':
            listarItens();

        case '4':
            somarValores();

        case '5':
            somarPesos();

        case '6':
            valorMedio();

        case '7':
            pesoMedio();

        case '8':
            totalEstoque();

        case '9':
            totalProdutos();

        case '0':
            break;
    }
}

main();