import { verifyMaskedBrazilianPhones } from "./index";

export default describe("UNIT - Testando utilitário de regex", () => {
    describe("FUNÇÃO - verifyMaskedBrazilianPhones", () => {
        it("deve retornar true para números de celular válidos", () => {
            expect(verifyMaskedBrazilianPhones("+55 (11) 91234-5678")).toBe(true);
            expect(verifyMaskedBrazilianPhones("+55 (21) 99876-5432")).toBe(true);
        });

        it("deve retornar true para números de telefone fixo válidos", () => {
            expect(verifyMaskedBrazilianPhones("+55 (11) 1234-5678")).toBe(true);
            expect(verifyMaskedBrazilianPhones("+55 (21) 9876-5432")).toBe(true);
        });

        it("deve retornar false para números de telefone inválidos", () => {
            expect(verifyMaskedBrazilianPhones("(21) 99876-54321")).toBe(false);
            expect(verifyMaskedBrazilianPhones("(11) 1234-567891")).toBe(false);
            expect(verifyMaskedBrazilianPhones("(21) 9876-543210")).toBe(false);
            expect(verifyMaskedBrazilianPhones("123")).toBe(false);
            expect(verifyMaskedBrazilianPhones("abc")).toBe(false);
        });
    });
});
