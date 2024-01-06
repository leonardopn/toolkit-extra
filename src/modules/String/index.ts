import { z } from "zod";

/**
 * Verifica se o texto fornecido é uma URL válida.
 * @param {string} text - O texto a ser verificado.
 * @returns {boolean} Retorna true se o texto for uma URL válida, caso contrário, retorna false.
 * @example
 * isUrl("https://developer.mozilla.org"); // retorna true
 * isUrl("http://localhost:3333"); // retorna true
 * isUrl("dasfdsds"); // retorna false
 * isUrl("localhost:3333"); // retorna false
 */
export function isUrl(text: string): boolean {
    let url: URL;

    try {
        url = new URL(text);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

/**
 * Retorna as iniciais do nome fornecido.
 * @param {string} name - O nome completo.
 * @returns {string} As iniciais do nome.
 * @example
 *
 * getNameInitials("João Silva"); // retorna "JS"
 * getNameInitials("Maria Souza"); // retorna "MS"
 * getNameInitials("   Maria   de   Souza   "); // retorna "MDS"
 */
export function getNameInitials(name: string): string {
    let initials = "";

    name.trim()
        .split(" ")
        .forEach((item) => {
            if (item[0]) {
                initials += item[0].toUpperCase();
            }
        });

    return initials;
}

/**
 * Maiusculiza a primeira letra de cada palavra no texto fornecido.
 * @param {string} text - O texto a ser maiusculizado.
 * @returns {string} O texto com a primeira letra de cada palavra maiusculizada.
 */
export function capitalizeFirstLetterOfEachWord(text: string): string {
    return text
        .split(" ")
        .map((item) => {
            if (item[0]) {
                return item[0].toUpperCase() + item.slice(1);
            }

            return "";
        })
        .join(" ");
}

/**
 * Oculta parte do email fornecido.
 * @param {string} email - O email do usuário.
 * @returns {string} O email com parte ocultada.
 */
export function hideEmail(email: string): string {
    let avg: number;
    let splitted: string[];
    let part1 = "";
    let part2 = "";

    const validation = z.string().email().safeParse(email);

    if (validation.success) {
        splitted = email.split("@");
        part1 = splitted[0] || "";
        avg = part1.length / 2;
        part1 = part1.substring(0, part1.length - avg);
        part2 = splitted[1] || "";

        return part1 + "***@" + part2;
    } else {
        return email;
    }
}

/**
 * @description Formata uma string de CNPJ adicionando pontuação.
 * @param cnpj - A string de CNPJ a ser formatada.
 * @returns A string de CNPJ formatada com pontuação.
 * @throws {Error} Se o CNPJ de entrada for inválido (não contiver 14 dígitos).
 */
export function formatCNPJ(cnpj: string): string {
    //NOTE: Remove todos os caracteres não numéricos do CNPJ
    const cnpjSemPontuacao = cnpj.replace(/\D/g, "");

    //NOTE: Verifica se o CNPJ possui a quantidade correta de dígitos
    if (cnpjSemPontuacao.length !== 14) {
        throw new Error("CNPJ inválido. Certifique-se de inserir 14 dígitos.");
    }

    //NOTE: Aplica a formatação com pontuação
    const cnpjFormatado = cnpjSemPontuacao.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");

    return cnpjFormatado;
}
