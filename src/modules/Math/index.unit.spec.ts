import { average, mode } from ".";

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

            const result = mode(array);
            const result2 = mode(array2);
            const result3 = mode(array3);
            const result4 = mode(array4);

            expect(result).toEqual([3, 4]);
            expect(result2).toEqual([1, 2]);
            expect(result3).toEqual([1, 2, 3]);
            expect(result4).toEqual([1]);
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
    });
});
