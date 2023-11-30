import { Dictionary, isUndefined, omitBy } from "lodash";

/**
 * Omite propriedades de um objeto.
 *
 * @param obj Objeto que tem os campos para serem omitidos.
 * @param keys Um array de chaves de `obj` que serão omitidas.
 * @param keepOriginal Booleano que determina se a função vai alterar o objeto original.
 * @returns Um objeto sem as propriedades que foram indicadas em `keys`
 * @obs Por padrão sempre pe retornado um novo objeto, caso deseja que o comportamento não seja imutável tornar `keepOriginal` como `false`.
 */
export function omitProp<T, Key extends keyof T>(obj: T, keys: Key[], keepOriginal = true): Omit<T, Key> {
    if (keepOriginal) {
        const objTemp = { ...obj };

        for (const key of keys) {
            delete objTemp[key];
        }

        return objTemp;
    }

    for (const key of keys) {
        delete obj[key];
    }

    return obj;
}

/**
 * Verifica se o valor é uma instância de classe
 *
 * @param {any} value - O objeto a ser processado.
 * @returns `boolean` - Um booleano que indica se é ou não uma instância de classe.
 */
export function isClassInstance(value: any): boolean {
    return value !== null && typeof value === "object" && value.constructor !== Object;
}

/**
 * Remove propriedades `undefined` de um objeto em todos os níveis de aninhamento.
 *
 * @template T - O tipo do objeto de entrada.
 * @param {T} data - O objeto a ser processado.
 * @returns {T} O objeto resultante sem propriedades `undefined`.
 */
export function omitUndefinedProps<T extends Dictionary<any>>(data: T): T {
    //NOTE: Cria um novo objeto resultante utilizando a função omitBy para remover propriedades `undefined`
    const result = omitBy(data, isUndefined) as T;

    //NOTE: Percorre as propriedades do objeto resultante
    for (const key in result) {
        //NOTE: Verifica se a propriedade é um objeto, não é nula e não é uma instância de classe
        if (typeof result[key] === "object" && result[key] !== null && !isClassInstance(result[key])) {
            //NOTE: Chama recursivamente a função omitUndefinedProps para remover propriedades `undefined` do objeto aninhado
            result[key] = omitUndefinedProps(result[key]);
        }
    }

    //NOTE: Retorna o objeto resultante sem propriedades `undefined`
    return result;
}
