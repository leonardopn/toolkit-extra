# `isArrayTyped`

Função que valida se todos os elementos de um array são de um determinado tipo.

>Além de garantir a tipagem em tempo de execução, essa função também serve para inferir o tipo do array para aqueles que usam `Typescript`.
>
>**ATENÇÃO:** Você é responsável por indicar qual o tipo do array, usando o campo genérico. Exemplo: `isArrayTyped<string>`
>
>Ou seja, a inferência julga que só você sabe qual o tipo desse array e vai confiar nisso, então, supondo um caso hipotético que você passa um array de tipo `number`, passa uma função validadora `isNumber` e informa no campo genérico que o array é `string`, então o typescript vai acreditar nisso, mesmo claramente sendo uma tipagem errada. A ideia é que sua inferência genérica e sua função validadora, andem de mãos dadas para garantir tanto uma tipagem estática coesa, quanto uma validação em tempo de execução correta. **TOME CUIDADO**

## Uso

```ts
import { isArrayTyped } from "toolkit-extra/array";

const onlyStringArray = ["foo", "bar"];
const joinedArray = ["foo", "bar", 3, 4];

function isString(item: string, index: number): boolean {
    return typeof item === "string";
}

isArrayTyped<string>(onlyStringArray, isString) // true;
isArrayTyped<string>(joinedArray, isString) // false;
```

## Referência

```ts
/**
 * @description Função que valida se todos os elementos de um array são de um determinado tipo.
 * @param array O array de qualquer que será avaliado
 * @param evidentiaryFn Uma função que será passada para avaliar cada item do array.
 * @returns Se o array é de determinado tipo indicado nos `generics`. Ou seja, se cada elemento passou como `true`na função evidentiaryFn.
 */
export function isArrayTyped<T>(array: any[], evidentiaryFn: (item: T, index: number) => boolean): array is T[] {
    return Array.isArray(array) && array.every(evidentiaryFn);
}
```
