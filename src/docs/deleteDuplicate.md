# `deleteDuplicate`

Função que remove elementos duplicados do array e retorna um novo array só com itens únicos.

>**ATENÇÃO:** A função só está preparada para arrays de dados primitivos como `string` ou `number`.
>Por falta de necessidade, não pretendo implementar um validador de equidade para dados mais complexos, porém, se isso mudar, penso em implementa-lo. Caso sinta necessidade, pode sempre abrir um PR 😁.

## Uso

```ts
import { deleteDuplicate } from "toolkit-extra/array";

const data = [1,1,2,2,3,3,4,5]

deleteDuplicate(data) // [1,2,3,4,5]
```

## Referência

```ts
/**
 * @description Função que remove elementos duplicados do array e retorna um novo array só com itens únicos.
 * @param array O array para eliminar os duplicados.
 * @returns Um array sem objetos duplicados.
 * @example
 * Função só funciona com dados javascript primitivos:
 * [2, 1, 2, 3], ["bar", "foo", "bar"], [true, true, false] e outros.
 */
export function deleteDuplicate<T>(array: T[]) {
    return [...new Set(array)];
}
```
