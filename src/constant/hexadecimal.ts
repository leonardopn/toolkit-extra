/**
 * Constante que contém todos os valores hexadecimais possíveis.
 */
export const HEXADECIMALS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"] as const;

/**
 * @description Um tipo que contém todos os valores hexadecimais possíveis.
 */
export type Hexadecimal = (typeof HEXADECIMALS)[number];
