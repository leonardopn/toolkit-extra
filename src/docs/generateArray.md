# `generateArray`

Função que cria um array de tamanho `n` já preenchido com valores.

>Por padrão, se não for fornecido nenhuma função de criação, é gerado um array de strings de tamanho `n` onde cada membro é um uuid v4.
>
>**ATENÇÃO:** Penso no futuro em fornecer para cada função criadora o index do elemento no array como propriedade. Acho que é um dado relevante que pode ser usado de alguma forma, porém, não vi necessidade em meus projetos.

## Uso

```ts
import { generateArray } from "toolkit-extra/array";
import { faker, simpleFaker } from '@faker-js/faker'; // Biblioteca para criar dados fictícios para teste. Só relevante para esse exemplo.

function creatorFn(){
    return {
        name: faker.person.fullName(),
        id:  simpleFaker.string.uuid();
    }
}

generateArray(0); // []
generateArray(1); // ["cb6965aa-cbff-43b3-8c41-44ab629735cc"]
generateArray(2, creatorFn);
/*
[
    {
        name: "Oscar Wilde",
        id: "499b28c5-ea3b-4f99-82fc-945a58606de9"
    },
    {
        name: "Marie Curie",
        id: "1563d186-0744-4af1-a0cb-e04b6c48fdcc"
    }
]
*/
```

## Referência

```ts
/**
 * @description Função que cria um array de tamanho `n` já preenchido com valores.
 * @param creatorFn Função opcional que cria cada membro do array
 * @param n Número de termos que o array deve ter.
 * @returns Retorna um array de tamanho `n` com o conteúdo baseado na função criadora ou cada elemento será uma string UUIDV4 se `creatorFn` não for passado.
 */
export function generateArray(n: number): string[];
export function generateArray<T>(n: number, creatorFn: () => T): T[];
export function generateArray<T>(n: number, creatorFn?: () => T): (string | T)[] {
    const array: any[] = [];

    for (let i = 0; i < n; i++) {
        array.push(creatorFn ? creatorFn() : v4());
    }

    return array;
}
```
