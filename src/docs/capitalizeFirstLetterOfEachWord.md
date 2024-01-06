# `capitalizeFirstLetterOfEachWord`

Maiusculiza a primeira letra de cada palavra no texto fornecido.

## Uso

```ts
import { capitalizeFirstLetterOfEachWord } from "toolkit-extra/string";

const result = capitalizeFirstLetterOfEachWord("essa frase vai ser maiusculizada"); // "Essa Frase Vai Ser Maiusculizada"
const result2 = capitalizeFirstLetterOfEachWord("essa     frase    vai    ser     maiusculizada"); // "Essa     Frase    Vai    Ser     Maiusculizada"
const result3 = capitalizeFirstLetterOfEachWord("ABCDE"); // "ABCDE"
const result4 = capitalizeFirstLetterOfEachWord("Abcde"); // "Abcde"
const result5 = capitalizeFirstLetterOfEachWord("aBCDE"); // "ABCDE"
```

## Referência

```ts
/**
 * Maiusculiza a primeira letra de cada palavra no texto fornecido.
 * @param {string} text - O texto a ser maiusculizado.
 * @returns {string} O texto com a primeira letra de cada palavra maiusculizada.
 */
export function capitalizeFirstLetterOfEachWord(text: string): string {
    return text
        .split(" ")
        .map((item) => {
            if (item[0]) {
                return item[0].toUpperCase() + item.slice(1);
            }

            return "";
        })
        .join(" ");
}
```
