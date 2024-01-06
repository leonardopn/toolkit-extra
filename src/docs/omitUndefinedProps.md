# `omitUndefinedProps`

Remove propriedades `undefined` de um objeto em todos os níveis de aninhamento.

## Uso

```ts
import { omitUndefinedProps } from "toolkit-extra/object";

const data = {
    foo: 1,
    bar: undefined,
    a: {
        b: 1,
        c: undefined,
        d: {
            e: 1,
            f: null,
            g: undefined,
            h: new Date()
        },
    },
};     

omitUndefinedProps(data);
/*
{
    foo: 1,
    a: {
        b: 1,
        d: {
            e: 1,
            f: null,
            h: Date
        },
    },
};
*/
```

## Referência

```ts
/**
 * Remove propriedades `undefined` de um objeto em todos os níveis de aninhamento.
 *
 * @template T - O tipo do objeto de entrada.
 * @param {T} data - O objeto a ser processado.
 * @returns {T} O objeto resultante sem propriedades `undefined`.
 */
export function omitUndefinedProps<T extends Dictionary<any>>(data: T): T {
    //NOTE: Cria um novo objeto resultante utilizando a função omitBy para remover propriedades `undefined`
    const result = omitBy(data, isUndefined) as T;

    //NOTE: Percorre as propriedades do objeto resultante
    for (const key in result) {
        //NOTE: Verifica se a propriedade é um objeto, não é nula e não é uma instância de classe
        if (typeof result[key] === "object" && result[key] !== null && !isClassInstance(result[key])) {
            //NOTE: Chama recursivamente a função omitUndefinedProps para remover propriedades `undefined` do objeto aninhado
            result[key] = omitUndefinedProps(result[key]);
        }
    }

    //NOTE: Retorna o objeto resultante sem propriedades `undefined`
    return result;
}
```
