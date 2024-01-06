import { sum } from "lodash";
import { mode as mathjsMode } from "mathjs";

/**
 * @description Função para calcular a média de valores em um array de números.
 * @param data Um array de números.
 * @returns A média do array passado.
 * @example
 * const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
 * const array2 = [0, 0, 0, 0, 0, 0, 0, 0];
 * average(array) //3;
 * average(array2) //0;
 */
export function average(data: number[]): number {
    if (data.length === 0) return 0;

    return sum(data) / data.length;
}

/**
 * @description Função que diz qual é a moda inclusa em um array de números. (Números que mais se repetem.)
 * @param data Um array de números que será avaliado.
 * @returns Um array contendo os números com maior repetição (moda) ou undefined se não houver moda.
 * @example
 * const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
 * const array2 = [1, 2, 3, 4, 5, 6];
 * mode(array) //4;
 * mode(array2) //undefined;
 */
export function mode(data: number[]): number[] | undefined {
    if (data.length === 0) return undefined;

    //FIXME: Tipos do mathjs aparentam estar inconsistentes
    const result = mathjsMode(data) as unknown as number[];

    return result.length === data.length ? (result.length === 1 ? result : undefined) : result;
}
