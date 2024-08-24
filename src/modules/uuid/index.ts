import { HEXADECIMALS } from "../../constant/hexadecimal";
import { getRandomNumber } from "../Random";

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
