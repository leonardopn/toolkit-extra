import { max, min } from "lodash";
import { v4 } from "uuid";

/**
 * @description Função que pega um array inicial e repete seu conteúdo em um novo array `n` vezes.
 * @param array Array que será a base.
 * @param times Vezes que o array deve ser repetido.
 * @returns Um novo array do mesmo tipo com os dados repetidos `n` vezes.
 */
export function repeatArray<T>(array: T[], times: number): T[] {
    let result: any[] = [];

    if (times <= 0) return result.concat(array);

    for (let i = 0; i <= times; i++) {
        result = result.concat(array);
    }

    return result;
}

/**
 * @description Função que remove elementos duplicados do array e retorna um novo array só com itens únicos.
 * @param array O array para eliminar os duplicados.
 * @returns Um array sem objetos duplicados.
 * @example
 * Função só funciona com dados javascript primitivos:
 * [2, 1, 2, 3], ["bar", "foo", "bar"], [true, true, false] e outros.
 */
export function deleteDuplicate<T>(array: T[]) {
    return [...new Set(array)];
}

/**
 * @description Uma função que retorna o valor mínimo e máximo de um array de números
 * @param numbers Um array de números
 * @param defaultValue Um valor que será usado como default caso não exista valor mínimo ou máximo
 */
export function getMinMax(numbers: number[]): { min?: number; max?: number };
export function getMinMax(numbers: number[], defaultValue: number): { min: number; max: number };
export function getMinMax(
    numbers: number[],
    defaultValue?: number
): { min?: number; max?: number } | { min: number; max: number } {
    const minValue = min(numbers) ?? defaultValue;
    const maxValue = max(numbers) ?? defaultValue;

    if (defaultValue !== undefined) {
        return { min: minValue as number, max: maxValue as number };
    }

    return { min: minValue, max: maxValue };
}

/**
 * @description Função que cria um array de tamanho `n` já preenchido com valores.
 * @param creatorFn Função opcional que cria cada membro do array
 * @param n Número de termos que o array deve ter.
 * @returns Retorna um array de tamanho `n` com o conteúdo baseado na função criadora ou cada elemento será uma string UUIDV4 se `creatorFn` não for passado.
 */
export function generateArray(n: number): string[];
export function generateArray<T>(n: number, creatorFn: () => T): T[];
export function generateArray<T>(n: number, creatorFn?: () => T): (string | T)[] {
    const array: any[] = [];

    for (let i = 0; i < n; i++) {
        array.push(creatorFn ? creatorFn() : v4());
    }

    return array;
}

/**
 * @description Função que valida se todos os elementos de um array são de um determinado tipo.
 * @param array O array de qualquer que será avaliado
 * @param evidentiaryFn Uma função que será passada para avaliar cada item do array.
 * @returns Se o array é de determinado tipo indicado nos `generics`. Ou seja, se cada elemento passou como `true`na função evidentiaryFn.
 */
export function isArrayTyped<T>(array: any[], evidentiaryFn: (item: T, index: number) => boolean): array is T[] {
    return Array.isArray(array) && array.every(evidentiaryFn);
}

/**
 * @description Função que move um elemento para outra posição dentro de um array.
 * @param array O array de elementos que iremos usar para movimentar um elemento.
 * @param element O elemento que iremos mover dentro do array.
 * @param newPosition A nova posição que o elemento deve ter no array.
 * @param returnNewArray Um valor opcional que determina se devemos retorna um novo array, ou se o array original deve ser retornado. Padrão: `true`.
 * @returns O array original ou um novo array, porém o valor indicado em `element`foi movido para uma posição especificada em `nemPosition`.
 */
export function moveElement<T>(array: T[], element: T, newPosition: number, returnNewArray = true) {
    if (returnNewArray) {
        const newArray = [...array];
        const index = newArray.indexOf(element);

        if (index === -1) throw new Error("Elemento não encontrado no array");

        newArray.splice(index, 1);
        newArray.splice(newPosition, 0, element);
        return newArray;
    }

    const index = array.indexOf(element);

    if (index === -1) throw new Error("Elemento não encontrado no array");

    array.splice(index, 1);
    array.splice(newPosition, 0, element);
    return array;
}
