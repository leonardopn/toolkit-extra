/**
 * @description Função timeout para aguardar um tempo determinado porém, é assíncrona
 * @param ms Número de milissegundos a esperar
 * @returns Uma promise que resolve após o tempo especificado
 */
export function timeoutAsync(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @description Função parecida com timeout que executa outra função, porém, retorna uma promise
 * @param ms Número de milissegundos a esperar
 * @param fn Uma função(assíncrona ou não) a ser executada após o tempo especificado
 * @param args Um array com os argumentos sequências da função a ser executada
 * @returns O resultado da função a ser executada
 */
export async function sleep<T extends (...args: any[]) => any>(
    ms: number,
    fn: T,
    args: Parameters<T>
): Promise<Awaited<ReturnType<T>>> {
    await timeoutAsync(ms);
    const valueToReturn = await fn(...args);
    return valueToReturn;
}
