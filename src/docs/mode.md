# `mode`

Função que diz qual é a moda inclusa em um array de números. (Números que mais se repetem).

>**ATENÇÃO:** Essa função é baseada na função de mesmo nome da biblioteca `Math.js`, porém com algumas alterações para retornar o dado de uma maneira que eu acho mais correta. As modificações são as seguintes:

- Se não houver moda no array, a função original devolvia o array original, porém acho melhor devolver `undefined`, que para mim faz mais sentido pelas regras matemáticas de uma moda.
- Se for passado um array vazio, também é retornado `undefined`, porém na função original, é emitido um erro.

>**ATENÇÃO:** Na atual versão que é utilizado da biblioteca `mathjs"^12.2.1`, parece que há um problema de tipagem onde o resultado da função diz que deveria ser do tipo `number`, porém ao usar a função, podemos notar que é retornado um `number[]`. Isso é corrigido por inferência de tipagem na própria função. Se notar algum problema nessa inferência, PRs são sempre bem vindos.

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
    //FIXME: Tipos do mathjs aparentam estar inconsistentes
    const result = mathjsMode(data) as unknown as number[];

    return result.length === data.length ? (result.length === 1 ? result : undefined) : result;
}
```
