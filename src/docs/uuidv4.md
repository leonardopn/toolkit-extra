# `v4`

Função que gera um UUID na versão 4.

## Uso

```ts
import { v4 } from "toolkit-extra/uuid";

const uuid = v4(); // 1598838d-a312-4b53-b192-0acfac0da2dd
```

## Referência

```ts
/**
 * @description Função que gera um UUId na versão 4.
 * @returns Uma string UUID v4
 */
export function v4(): string {
	const possibleCheckDigits = [8, 9, "a", "b", "a"] as const;
	const uuidShape = "xxxxxxxx-xxxx-4xxx-Nxxx-xxxxxxxxxxxx";
	let uuidResult = "";

	for (const char of uuidShape) {
		switch (char) {
			case "N": {
				uuidResult += possibleCheckDigits[getRandomNumber(0, possibleCheckDigits.length - 1)]?.toString() ?? "";
				break;
			}
			case "x": {
				uuidResult += HEXADECIMALS[getRandomNumber(0, HEXADECIMALS.length - 1)];
				break;
			}
			default: {
				uuidResult += char;
			}
		}
	}

	return uuidResult;
}

```
