import { deleteDuplicate, generateArray, getMinMax, isArrayTyped, moveElement, repeatArray } from ".";
import { z } from "zod";

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

        test("Isso deve manter o array igual, já que moveu o elemento para a mesa posição.", () => {
            const array = moveElement([1, 2, 3, 4], 2, 1);

            expect(array).toEqual([1, 2, 3, 4]);
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

    describe("FUNÇÃO - getMinMax", () => {
        it("Deve retornar os valores mínimos e máximos de um array corretamente", () => {
            const array = [1, 2];

            const result = getMinMax(array);

            expect(result.max).toBe(2);
            expect(result.min).toBe(1);
        });

        it("Deve retornar undefined se o array passado for vazio", () => {
            const array: number[] = [];

            const result = getMinMax(array);

            expect(result.max).toBeUndefined();
            expect(result.min).toBeUndefined();
        });

        it("Deve retornar que o valor mínimo e máximo são iguais", () => {
            const array: number[] = [1];

            const result = getMinMax(array);

            expect(result.max).toBe(1);
            expect(result.min).toBe(1);
        });

        it("Deve retornar o valor padrão caso ele não encontre o mínimo e o máximo", () => {
            const array: number[] = [];

            const result = getMinMax(array, 10);

            expect(result.max).toBe(10);
            expect(result.min).toBe(10);
        });
    });

    describe("FUNÇÃO - repeatArray", () => {
        it("Deve repetir o array corretamente.", () => {
            const array = [1, 2];

            const result = repeatArray(array, 1);
            const result2 = repeatArray(array, 2);
            const result3 = repeatArray(array, 3);

            expect(result).toStrictEqual([1, 2, 1, 2]);
            expect(result2).toStrictEqual([1, 2, 1, 2, 1, 2]);
            expect(result3).toStrictEqual([1, 2, 1, 2, 1, 2, 1, 2]);
        });

        it("Deve manter o array igual, já que o valor de repetição é igual ou menor que 0.", () => {
            const array = [1, 2];

            const result = repeatArray(array, 0);
            const result2 = repeatArray(array, -10);

            expect(result).toStrictEqual([1, 2]);
            expect(result2).toStrictEqual([1, 2]);
        });

        it("Deve manter o array vazio, já que ele não tem membros.", () => {
            const array: number[] = [];

            const result = repeatArray(array, 10);
            const result2 = repeatArray(array, -10);
            const result3 = repeatArray(array, 0);

            expect(result).toStrictEqual([]);
            expect(result2).toStrictEqual([]);
            expect(result3).toStrictEqual([]);
        });
    });

    describe("FUNÇÃO - generateArray", () => {
        it("Deve criar um array de 5 elementos de uuid.", () => {
            const result = generateArray(5);
            const schema = z.array(z.string().uuid()).min(5).max(5);

            const t = () => {
                schema.parse(result);
            };

            expect(t).not.toThrowError();
        });

        it("Deve criar um array de 5 elementos number iguais.", () => {
            const result = generateArray(5, () => {
                return 1;
            });

            const schema = z.array(z.number().min(1).max(1)).min(5).max(5);

            const t = () => {
                schema.parse(result);
            };

            expect(t).not.toThrowError();
        });

        it("Deve criar um array vazio.", () => {
            const result = generateArray(0);

            expect(result.length).toBe(0);
        });
    });
});
