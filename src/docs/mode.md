# `mode`

Função que diz qual é a moda inclusa em um array de números. (Números que mais se repetem).

## Uso

```ts
import { mode } from "toolkit-extra/math";

const array = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
const array2 = [1, 1, 2, 2];
const array3 = [1, 1, 2, 2, 3, 3];
const array4 = [1, 1];
const array5 = [1, 2, 3, 4];

mode(array); // [3, 4]
mode(array2); // [1, 2]
mode(array3); // [1, 2, 3]
mode(array4); // [1]
mode(array5); // undefined
mode([]); // undefined
```

## Referência

```ts
/**
 * @description Função que diz qual é a moda inclusa em um array de números. (Números que mais se repetem.)
 * @param data Um array de números que será avaliado.
 * @returns Um array contendo os números com maior repetição (moda) ou undefined se não houver moda.
 * @example
 * const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
 * const array2 = [1, 2, 3, 4, 5, 6];
 * mode(array) //4;
 * mode(array2) //undefined;
 */
export function mode(data: number[]): number[] | undefined {
    if (data.length === 0) return undefined;

    if (!data.every((item) => typeof item === "number"))
        throw Error(`Todos os itens do array devem ser do tipo number. Recebido: ${data}`);

    const occurrences: { [key: number]: number } = {};
    let result: number[] = [];
    let maxOccurrences = 0;

    for (const number of data) {
        occurrences[number] = (occurrences[number] || 0) + 1;
        const occurrencesByCurrentNumber = occurrences[number];

        if (occurrencesByCurrentNumber && occurrencesByCurrentNumber > maxOccurrences) {
            maxOccurrences = occurrencesByCurrentNumber;
        }
    }

    for (const number in occurrences) {
        if (occurrences[number] === maxOccurrences) {
            result.push(Number(number));
        }
    }

    return result.length === data.length ? (result.length === 1 ? result : undefined) : result;
}
```
