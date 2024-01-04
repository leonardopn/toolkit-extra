# `average`

Função para calcular a média de valores em um array de números.

## Uso

```ts
import { average } from "toolkit-extra/math";

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const array2 = [0, 0, 0, 0, 0, 0, 0, 0];
const array3 = [];

average(array) // 3;
average(array2) // 0;
average(array3) // 0;
```

## Referência

```ts
/**
 * @description Função para calcular a média de valores em um array de números.
 * @param data Um array de números.
 * @returns A média do array passado.
 * @example
 * const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];;
 * const array2 = [0, 0, 0, 0, 0, 0, 0, 0];
 * average(array) //3;
 * average(array2) //0;
 */
export function average(data: number[]): number {
    if (data.length === 0) return 0;

    return sum(data) / data.length;
}
```
