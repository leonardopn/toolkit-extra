# `verifyMaskedBrazilianPhones`

Valida um número de telefone brasileiro com mascaras (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.

## Uso

```ts
import { verifyMaskedBrazilianPhones } from "toolkit-extra/regex";

verifyMaskedBrazilianPhones("+55 (11) 91234-5678") // true
verifyMaskedBrazilianPhones("+55 (21) 99876-5432") // true   
verifyMaskedBrazilianPhones("+55 (11) 1234-5678") // true
verifyMaskedBrazilianPhones("+55 (21) 9876-5432") // true
     
verifyMaskedBrazilianPhones("(21) 99876-54321") // false
verifyMaskedBrazilianPhones("(11) 1234-567891") // false
verifyMaskedBrazilianPhones("(21) 9876-543210") // false
verifyMaskedBrazilianPhones("123") // false
verifyMaskedBrazilianPhones("abc") // false
           
```

## Referência

```ts
/**
 * @description Valida um número de telefone brasileiro com mascaras (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.
 * @param {string} phone - O número de telefone a ser validado.
 * @returns Retorna `true` se o número de telefone for válido, caso contrário, retorna `false`.
 */
export function verifyMaskedBrazilianPhones(phone: string): boolean {
    const cellMask = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;
    const phoneMask = /^\+55 \(\d{2}\) \d{4}-\d{4}$/;

    return cellMask.test(phone) || phoneMask.test(phone
}
```
