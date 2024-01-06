# `getRandomNumber`

Função que gera um número aleatório entre dois números.

## Uso

```ts
import { getRandomNumber } from "toolkit-extra/random";

getRandomNumber(1, 10); // 8
getRandomNumber(-5, 5); // 3
getRandomNumber(5, 5); // 5
getRandomNumber(10, 5); // NaN       
```

## Referência

```ts
/**
 * Função que gera um número aleatório entre dois números.
 *
 * @param min Valor mínimo par ao número gerado.
 * @param max Valor máximo par ao número gerado.
 * @returns Um valor que está entre `min` e `max` podendo incluir `min` e `max`.
 */
export function getRandomNumber(min: number, max: number) {
    if (min > max) return NaN;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```
