# `isUrl`

Verifica se o texto fornecido é uma URL válida.

## Uso

```ts
import { isUrl } from "toolkit-extra/string";
     
isUrl("https://developer.mozilla.org"); // true
isUrl("http://localhost:3333"); // true
isUrl("dasfdsds"); // false
isUrl("localhost:3333"); // false
```

## Referência

```ts
/**
 * Verifica se o texto fornecido é uma URL válida.
 * @param {string} text - O texto a ser verificado.
 * @returns {boolean} Retorna true se o texto for uma URL válida, caso contrário, retorna false.
 * @example
 * isUrl("https://developer.mozilla.org"); // retorna true
 * isUrl("http://localhost:3333"); // retorna true
 * isUrl("dasfdsds"); // retorna false
 * isUrl("localhost:3333"); // retorna false
 */
export function isUrl(text: string): boolean {
    let url: URL;

    try {
        url = new URL(text);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}
```
