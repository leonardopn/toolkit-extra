import { average, mode, verifyPAPresence } from ".";

export default describe("UNIT - Testando utilitário de math", () => {
    describe("FUNÇÃO - average", () => {
        test("Isso deve retornar uma média corretamente", () => {
            const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
            const result = average(array);
            expect(result).toEqual(3);
        });

        test("Isso deve retornar uma média 0", () => {
            const array: number[] = [];
            const array2: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

            const result = average(array);
            const result2 = average(array2);

            expect(result).toEqual(0);
            expect(result2).toEqual(0);
        });
    });

    describe("FUNÇÃO - mode", () => {
        test("Isso deve retornar o valor de maior ocorrência", () => {
            const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
            const result = mode(array);

            expect(result).toEqual([4]);
        });

        test("Isso deve retornar mais de um valor de maior ocorrência", () => {
            const array = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
            const array2 = [1, 1, 2, 2];
            const array3 = [1, 1, 2, 2, 3, 3];
            const array4 = [1, 1];
            const array5 = [1, 2, NaN, NaN];

            const result = mode(array);
            const result2 = mode(array2);
            const result3 = mode(array3);
            const result4 = mode(array4);
            const result5 = mode(array5);

            expect(result).toEqual([3, 4]);
            expect(result2).toEqual([1, 2]);
            expect(result3).toEqual([1, 2, 3]);
            expect(result4).toEqual([1]);
            expect(result5).toEqual([NaN]);
        });

        test("Isso deve retornar undefined, pois não há moda", () => {
            const array = [1, 2, 3, 4, 5, 6];
            const result = mode(array);
            const result2 = mode([]);

            expect(result).toBeUndefined();
            expect(result2).toBeUndefined();
        });

        test("Isso deve retornar uma moda, pois o há um único valor no array", () => {
            const array = [1];
            const result = mode(array);

            expect(result).toEqual([1]);
        });

        test("Isso deve emiti um erro, pois, o array não é do tipo `number`.", () => {
            const array = [1, 2, 3, "hello", true];
            const array2 = [1, 2, 3, 3, NaN];
            const array3 = ["1", "1"];

            const f1 = () => {
                mode(array as any);
            };
            const f2 = () => {
                mode(array2);
            };
            const f3 = () => {
                mode(array3 as any);
            };

            expect(f1).toThrowError();
            expect(f2).not.toThrowError();
            expect(f3).toThrowError();
        });
    });

    describe("FUNÇÃO - verifyPAPresence", () => {
        it("deve retornar false para uma razão de 0", () => {
            expect(() => verifyPAPresence(1, 0, 5)).toThrowError("Razão deve ser diferente de 0.");
        });

        it("deve retornar true e a posição para um número presente na PA", () => {
            expect(verifyPAPresence(1, 2, 5)).toEqual({ isPresent: true, position: 3 });
        });

        it("deve retornar false e NaN para um número não presente na PA", () => {
            expect(verifyPAPresence(1, 2, 6)).toEqual({ isPresent: false, position: NaN });
        });

        it("deve retornar true e a posição para um número presente na PA com razão negativa", () => {
            expect(verifyPAPresence(5, -2, -15)).toEqual({ isPresent: true, position: 11 });
        });

        it("deve retornar true e a posição para um número presente na PA com primeiro elemento negativo", () => {
            expect(verifyPAPresence(-10, 3, -1)).toEqual({ isPresent: true, position: 4 });
        });

        it("deve retornar false e NaN para um número não presente na PA com razão negativa", () => {
            expect(verifyPAPresence(10, -3, 2)).toEqual({ isPresent: false, position: NaN });
        });

        it("deve retornar true e a posição para o primeiro elemento da PA", () => {
            expect(verifyPAPresence(1, 2, 1)).toEqual({ isPresent: true, position: 1 });
        });

        it("deve retornar true e a posição para um número presente na PA com razão 1", () => {
            expect(verifyPAPresence(1, 1, 5)).toEqual({ isPresent: true, position: 5 });
        });

        it("deve retornar true e a posição para um número presente na PA com razão -1", () => {
            expect(verifyPAPresence(5, -1, 5)).toEqual({ isPresent: true, position: 1 });
        });

        it("deve retornar false e NaN para um número menor que o primeiro elemento da PA", () => {
            expect(verifyPAPresence(5, 2, 4)).toEqual({ isPresent: false, position: NaN });
        });

        it("deve retornar true e a posição para um número presente na PA com razão decimal", () => {
            expect(verifyPAPresence(1, 0.5, 3)).toEqual({ isPresent: true, position: 5 });
        });
    });
});
