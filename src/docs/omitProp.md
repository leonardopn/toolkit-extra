# `omitProp`

Omite propriedades de um objeto.

## :mega: Informações importantes

>**ATENÇÃO:** Fique atento ao campo `keepOriginal`. Por padrão a função sempre retorna um novo objeto para manter os requisitos de imutabilidade, porém, se você passar essa propriedade como `false`, esteja ciente que o seu objeto original será alterado.

## Uso

```ts
import { omitProp } from "toolkit-extra/object";

const data = {
    foo: "hi",
    bar: "hi",
};

omitProp(data, ["bar"]) // { foo: "hi" }
omitProp(data, ["foo"]) // { bar: "hi" }
omitProp({ ...data, a: { b: 2 } }, ["foo", "a"]) // { bar: "hi" }
omitProp(data, ["foo", "bar"]) // {}
omitProp(data, ["test"]) // {foo: "hi", bar: "hi"}
```

## Referência

```ts
/**
 * Omite propriedades de um objeto.
 *
 * @param obj Objeto que tem os campos para serem omitidos.
 * @param keys Um array de chaves de `obj` que serão omitidas.
 * @param keepOriginal Booleano que determina se a função vai alterar o objeto original.
 * @returns Um objeto sem as propriedades que foram indicadas em `keys`
 * @obs Por padrão sempre pe retornado um novo objeto, caso deseja que o comportamento não seja imutável tornar `keepOriginal` como `false`.
 */
export function omitProp<T, Key extends keyof T>(obj: T, keys: Key[], keepOriginal = true): Omit<T, Key> {
    if (keepOriginal) {
        const objTemp = { ...obj };

        for (const key of keys) {
            delete objTemp[key];
        }

        return objTemp;
    }

    for (const key of keys) {
        delete obj[key];
    }

    return obj;
}
```
