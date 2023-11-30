import { getRandomNumber } from ".";

export default describe("UNIT - Testando utilitário de random", () => {
    describe("FUNÇÃO - getRandomNumber", () => {
        it("Deve retornar um número entre 1 e 10", () => {
            const result = getRandomNumber(1, 10);
            expect(result).toBeGreaterThanOrEqual(1);
            expect(result).toBeLessThanOrEqual(10);
        });

        it("Deve retornar um número entre -5 e 5", () => {
            const result = getRandomNumber(-5, 5);
            expect(result).toBeGreaterThanOrEqual(-5);
            expect(result).toBeLessThanOrEqual(5);
        });

        it("Deve retornar o próprio número quando min === max", () => {
            const result = getRandomNumber(5, 5);
            expect(result).toEqual(5);
        });

        it("Deve retornar NaN quando min > max", () => {
            const result = getRandomNumber(10, 5);
            expect(result).toBeNaN();
        });
    });
});
