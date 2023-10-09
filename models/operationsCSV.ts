import {Data} from './dataInterface'

import fs from 'fs';
import csv from 'csv-parser';

const readCSV = async (filePath: string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'NOME' },
      { id: 'peso', title: 'PESO' },
      { id: 'valor', title: 'VALOR'},
      { id: 'quantidade', title: 'QUANTIDADE'},
    ],
  });

  return csvWriter.writeRecords(data);
};

const main = async () => {
    try {
      const data = await readCSV('C:\Users\rapos\OneDrive\Documentos\iJunior\Semana 2\estoque.csv');
      console.log('Dados lidos:', data);
  
      await writeCSV('C:\Users\rapos\OneDrive\Documentos\iJunior\Semana 2\estoque.csv', data);
      console.log('Dados escritos em output.csv');
    } catch (error) {
      console.error('Erro:', error);
    }
};
  
main();
  
export {readCSV, writeCSV}
