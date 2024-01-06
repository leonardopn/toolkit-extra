/**
 * Função que gera um número aleatório entre dois números.
 *
 * @param min Valor mínimo par ao número gerado.
 * @param max Valor máximo par ao número gerado.
 * @returns Um valor que está entre `min` e `max` podendo incluir `min` e `max`.
 */
export function getRandomNumber(min: number, max: number) {
    if (min > max) return NaN;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
