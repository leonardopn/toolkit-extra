import { deleteDuplicate, isArrayTyped, moveElement } from ".";

describe("UNIT - Testando utilitário de array", () => {
    describe("FUNÇÃO - deleteDuplicate", () => {
        test("Isso deve remover valores repetidos do array", () => {
            const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

            const arrayWithoutDuplicate = deleteDuplicate(array);

            expect(arrayWithoutDuplicate).toEqual([1, 2, 3, 4]);
        });

        test("Isso deve manter o array inalterado, pois a função só funciona com primitivos", () => {
            const array = [
                { nome: "Jhon Doe", idade: 13 },
                { nome: "Jhon Doe 2", idade: 14 },
                { nome: "Jhon Doe", idade: 13 },
            ];
            const arrayWithoutDuplicate = deleteDuplicate(array);

            expect(arrayWithoutDuplicate).toEqual(array);
        });
    });

    describe("FUNÇÃO - moveElement", () => {
        const arrayToTest = [1, 2, 3, 4];

        test("Isso deve mover o elemento para a primeira posição", () => {
            const arrayResult = [2, 1, 3, 4];

            const array2 = moveElement(arrayToTest, 2, 0);

            expect(array2).toEqual(arrayResult);
        });

        test("Isso deve validar se a posição exceder o tamanho do array, o elemento vai para a última posição", () => {
            const arrayResult = [1, 3, 4, 2];

            const array2 = moveElement(arrayToTest, 2, 6);

            expect(array2).toEqual(arrayResult);
        });

        test("Isso deve validar se a posição for negativa, o elemento vai para a primeira posição", () => {
            const arrayResult = [2, 1, 3, 4];

            const array2 = moveElement(arrayToTest, 2, -3);

            expect(array2).toEqual(arrayResult);
        });

        test("Isso deve gerar um erro, pois o elemento não foi encontrado no array", () => {
            const t = () => {
                moveElement(arrayToTest, 5, 2);
            };

            const t2 = () => {
                moveElement(arrayToTest, 5, 2, false);
            };

            expect(t).toThrowError();
            expect(t2).toThrowError();
        });

        test("Isso deve substituir o array original", () => {
            const array2 = moveElement(arrayToTest, 2, 2, false);

            expect(array2).toStrictEqual(arrayToTest);
        });
    });

    describe("FUNÇÃO - isArrayTyped", () => {
        it("Deve validar se todos os elementos do array são do tipo string", () => {
            const array = ["a", "b", "c"];

            const result = isArrayTyped<string>(array, () => typeof array[0] === "string");

            expect(result).toBeTruthy();
        });

        it("Deve validar se todos os elementos do array não são do tipo string", () => {
            const array = [1, 2, 4, "a"];

            const result = isArrayTyped<string>(array, () => typeof array[0] === "string");

            expect(result).toBeFalsy();
        });

        it("Deve validar se um array vazio ainda pode ser considerado um array de um determinado tipo", () => {
            const array: string[] = [];

            const result = isArrayTyped<string>(array, () => typeof array[0] === "string");

            expect(result).toBeTruthy();
        });
    });
});
