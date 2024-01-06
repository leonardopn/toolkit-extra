# `repeatArray`

Função que pega um array inicial e repete seu conteúdo em um novo array `n` vezes.

>Se o array estiver vazio, então é retornado um array vazio, independente da repetição.
>
>Se o valor de `times` for menor ou igual a 0, então é retornado um novo array com os mesmos valores do original.

## Uso

```ts
import { repeatArray } from "toolkit-extra/array";

const data = [1, 2]

repeatArray(data, -10) // [1, 2]
repeatArray(data, 0) // [1, 2]
repeatArray(data, 1) // [1, 2, 1, 2]
repeatArray(data, 2) // [1, 2, 1, 2, 1, 2]
repeatArray([], 2) // []
repeatArray([], -2) // []
repeatArray([], 0) // []
```

>**ATENÇÃO:** Exemplo só usa primitivos, mas a função pode ser usada para repetir qualquer `tipo` de array.

## Referência

```ts
/**
 * @description Função que pega um array inicial e repete seu conteúdo em um novo array `n` vezes.
 * @param array Array que será a base.
 * @param times Vezes que o array deve ser repetido.
 * @returns Um novo array do mesmo tipo com os dados repetidos `n` vezes.
 */
export function repeatArray<T>(array: T[], times: number): T[] {
    let result: any[] = [];

    if (times <= 0) return result.concat(array);

    for (let i = 0; i <= times; i++) {
        result = result.concat(array);
    }

    return result;
}
```
