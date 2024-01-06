# `getNameInitials`

Função que retorna as iniciais do nome fornecido.

## Uso

```ts
import { getNameInitials } from "toolkit-extra/string";
     
getNameInitials("João Silva"); // "JS"
getNameInitials("Maria Souza"); // "MS"
getNameInitials("   Maria   de   Souza   "); // "MDS"
```

## Referência

```ts
/**
 * Retorna as iniciais do nome fornecido.
 * @param {string} name - O nome completo.
 * @returns {string} As iniciais do nome.
 * @example
 *
 * getNameInitials("João Silva"); // retorna "JS"
 * getNameInitials("Maria Souza"); // retorna "MS"
 * getNameInitials("   Maria   de   Souza   "); // retorna "MDS"
 */
export function getNameInitials(name: string): string {
    let initials = "";

    name.trim()
        .split(" ")
        .forEach((item) => {
            if (item[0]) {
                initials += item[0].toUpperCase();
            }
        });

    return initials;
}
```
