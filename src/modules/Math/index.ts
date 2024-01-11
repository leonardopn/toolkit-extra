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

    const sum = data.reduce((acc, item) => item + acc, 0);

    return sum / data.length;
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

    if (!data.every((item) => typeof item === "number"))
        throw Error(`Todos os itens do array devem ser do tipo number. Recebido: ${data}`);

    const occurrences: { [key: number]: number } = {};
    let result: number[] = [];
    let maxOccurrences = 0;

    for (const number of data) {
        occurrences[number] = (occurrences[number] || 0) + 1;
        const occurrencesByCurrentNumber = occurrences[number];

        if (occurrencesByCurrentNumber && occurrencesByCurrentNumber > maxOccurrences) {
            maxOccurrences = occurrences[number] || maxOccurrences;
        }
    }

    for (const number in occurrences) {
        if (occurrences[number] === maxOccurrences) {
            result.push(Number(number));
        }
    }

    return result.length === data.length ? (result.length === 1 ? result : undefined) : result;
}
