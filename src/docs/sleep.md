# `sleep`

Função parecida com a função timeout do javascript, porém, retorna uma promise.

## Uso

```ts
import { sleep } from "toolkit-extra/timeout";

async function exampleFn(){
    await sleep(2000, () => "foo", []);  // Promise que se resolve em 2 segundos.
    await sleep(10000, (foo: string) => foo, ["foo"]);  // Promise que se resolve em 10 segundos.
    await sleep(500, (foo: string, bar: number[]) => foo + bar.length, ["foo", [1, 2, 3]]);  // Promise que se resolve em 500 milissegundos.
} 
```

## Referência

```ts
/**
 * @description Função parecida com a função timeout do javascript, porém, retorna uma promise.
 * @param ms Número de milissegundos a esperar
 * @param fn Uma função(assíncrona ou não) a ser executada após o tempo especificado
 * @param args Um array com os argumentos sequências da função a ser executada
 * @returns O resultado da função a ser executada
 */
export async function sleep<T extends (...args: any[]) => any>(
    ms: number,
    fn: T,
    args: Parameters<T>
): Promise<Awaited<ReturnType<T>>> {
    await timeoutAsync(ms);
    const valueToReturn = await fn(...args);
    return valueToReturn;
}
```
