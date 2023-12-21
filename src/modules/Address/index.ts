import { IBrazilianState } from "../../@types/BrazilianState";
import brazilianStates from "../../jsons/brazilian_states.json";

/**
 * @description Uma função que retorna um array com todos os estados brasileiros.
 * @returns Um array de estados brasileiros no formato `IBrazilianState`.
 */
export function getBrazilianStates() {
    return brazilianStates.UF;
}

/**
 * @description Busca um estado brasileiro pela sua inicial.
 * @param initials Inicias do estado que será buscado.
 * @returns Um objeto do tipo `IBrazilianState` ou `null`.
 */
export function getBrazilianStateByInitials(initials?: string): IBrazilianState | null {
    if (initials) {
        return brazilianStates.UF.find((state) => state.initials.toUpperCase() === initials.toUpperCase()) || null;
    }
    return null;
}

/**
 * @description Busca um estado brasileiro pelo nome.
 * @param name Nome do estado que será buscado.
 * @returns Um objeto do tipo `IBrazilianState` ou `null`.
 */
export function getBrazilianStateByName(name?: string | null): IBrazilianState | null {
    if (name) {
        const regex = new RegExp(name, "i");

        const filteredStates = brazilianStates.UF.filter((item) => regex.test(item.name));

        return filteredStates[0] || null;
    }
    return null;
}
