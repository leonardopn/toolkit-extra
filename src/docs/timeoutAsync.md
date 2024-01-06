# `timeoutAsync`

Função timeout para aguardar um tempo determinado porém, é assíncrona.

## Uso

```ts
import { timeoutAsync } from "toolkit-extra/timeout";

async function exampleFn(){
    await timeoutAsync(2000);  // Promise que se resolve em 2 segundos.
    await timeoutAsync(10000);  // Promise que se resolve em 10 segundos.
    await timeoutAsync(500);  // Promise que se resolve em 500 milissegundos.
} 
```

## Referência

```ts
/**
 * @description Função timeout para aguardar um tempo determinado porém, é assíncrona.
 * @param ms Número de milissegundos a esperar
 * @returns Uma promise que resolve após o tempo especificado
 */
export function timeoutAsync(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
```
