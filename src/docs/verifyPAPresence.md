# `verifyPAPresence`

Função que verifica se um número está presente em uma Progressão Aritmética (PA).

## Uso

```ts
import { verifyPAPresence } from "toolkit-extra/math";

verifyPAPresence(1, 2, 5); // { isPresent: true, position: 3 }

verifyPAPresence(1, 2, 6); // { isPresent: false, position: NaN }

verifyPAPresence(5, -2, -15); // { isPresent: true, position: 11 }

verifyPAPresence(-10, 3, -1); // { isPresent: true, position: 4 }

verifyPAPresence(10, -3, 2); // { isPresent: false, position: NaN }

verifyPAPresence(1, 2, 1); // { isPresent: true, position: 1 }

verifyPAPresence(1, 1, 5); // { isPresent: true, position: 5 }

verifyPAPresence(5, -1, 5); // { isPresent: true, position: 1 }

verifyPAPresence(5, 2, 4); // { isPresent: false, position: NaN }

verifyPAPresence(1, 0.5, 3); // { isPresent: true, position: 5 }
```

## Referência

```ts
/**
 * @description Função que verifica se um número está presente em uma Progressão Aritmética (PA).
 * @author Leonardo Petta do Nascimento - <leonardocps9@gmail.com>
 * @param firstElement O primeiro elemento da PA.
 * @param rate A razão de progressão.
 * @param numToVerify O número que iremos verificar se está presente.
 * @returns Um objeto contendo a posição e se se o número está presente.
 */
export function verifyPAPresence(firstElement: number, rate: number, numToVerify: number) {
    if (rate === 0) {
        throw new Error("Razão deve ser diferente de 0.");
    }

    //NOTE Verifica se o númeroBase está presente na PA
    const position = (numToVerify - firstElement) / rate + 1;

    const isPresent = position % 1 === 0 && position > 0;

    return { isPresent, position: isPresent ? position : NaN };
}

```
