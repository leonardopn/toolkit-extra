import { getBrazilianStateByInitials, getBrazilianStateByName, getBrazilianStates } from ".";

import brazilianStates from "../../jsons/brazilian_states.json";

export default describe("UNIT - Testando utilitário de address", () => {
    describe("FUNÇÃO - getBrazilianStates", () => {
        test("Isso deve retornar um array de estados brasileiros", () => {
            const states = getBrazilianStates();
            expect(states).toBeInstanceOf(Array);
            expect(states.length).toBe(brazilianStates.UF.length);
            expect(states).toBe(brazilianStates.UF);
        });
    });

    describe("FUNÇÃO - getBrazilianState", () => {
        test("Isso deve retornar null para um estado que não existe", () => {
            const state = getBrazilianStateByInitials("ZZ");
            const state2 = getBrazilianStateByInitials();

            expect(state).toBeNull();
            expect(state2).toBeNull();
        });

        test("Isso deve retornar um estado pela inicial", () => {
            const result = {
                name: "São Paulo",
                initials: "SP",
            };

            const stateUpper = getBrazilianStateByInitials("SP");
            const stateLower = getBrazilianStateByInitials("sp");

            expect(stateUpper).toStrictEqual(result);
            expect(stateLower).toStrictEqual(result);
        });
    });

    describe("FUNÇÃO - getBrazilianStateByName", () => {
        it("deve retornar o estado correto quando um nome válido é fornecido", () => {
            const state = getBrazilianStateByName("São Paulo");
            expect(state).toEqual({ name: "São Paulo", initials: "SP" });
        });

        it("deve retornar null quando um nome inválido é fornecido", () => {
            const state = getBrazilianStateByName("Estado Inválido");
            expect(state).toBeNull();
        });

        it("deve ser case-insensitive", () => {
            const state = getBrazilianStateByName("rIO gRANDE dO nORTE");
            expect(state).toEqual({ name: "Rio Grande do Norte", initials: "RN" });
        });

        it("deve retornar o primeiro estado correspondente quando múltiplas correspondências são encontradas", () => {
            const state = getBrazilianStateByName("A");
            expect(state).toEqual({ name: "Acre", initials: "AC" });
        });

        it("deve retornar null quando nenhum nome é fornecido", () => {
            const state = getBrazilianStateByName();
            expect(state).toBeNull();
        });
    });
});
