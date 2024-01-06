# `isClassInstance`

Verifica se o valor passado é uma instância de classe.

## Uso

```ts
import { isClassInstance } from "toolkit-extra/object";

isClassInstance(new Date()); // true
isClassInstance(new Error()); // true
isClassInstance(new Number(10)); // true
isClassInstance(new String("EU SOU")); // true
isClassInstance(new Boolean(false)); // true
isClassInstance([]); // true
       
function foo() {
    return "bar";
}

isClassInstance("NÃO SOU MESMO"); // false
isClassInstance(123); // false
isClassInstance(false); // false
isClassInstance(null); // false
isClassInstance({ foo: "", bar: "" }); // false
isClassInstance({}); // false
isClassInstance(undefined); // false
isClassInstance(() => {}); // false
isClassInstance(foo); // false
```

## Referência

```ts
/**
 * Verifica se o valor passado é uma instância de classe.
 *
 * @param {any} value - O objeto a ser processado.
 * @returns `boolean` - Um booleano que indica se é ou não uma instância de classe.
 */
export function isClassInstance(value: any): boolean {
    return value !== null && typeof value === "object" && value.constructor !== Object;
}
```
