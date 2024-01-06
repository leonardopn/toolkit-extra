/**
 * @description Valida um número de telefone brasileiro com mascaras (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.
 * @param {string} phone - O número de telefone a ser validado.
 * @returns Retorna `true` se o número de telefone for válido, caso contrário, retorna `false`.
 */
export function verifyMaskedBrazilianPhones(phone: string): boolean {
    const cellMask = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;
    const phoneMask = /^\+55 \(\d{2}\) \d{4}-\d{4}$/;

    return cellMask.test(phone) || phoneMask.test(phone);
}
