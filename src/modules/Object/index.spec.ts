import { isClassInstance, omitProp, omitUndefinedProps } from ".";

export default describe("UNIT - Testando utilitário de Object", () => {
    describe("FUNÇÃO - isClassInstance", () => {
        it("Deve validar que o dado passado é uma instância de classe", () => {
            expect(isClassInstance(new Date())).toBeTruthy();
            expect(isClassInstance(new Error())).toBeTruthy();
            expect(isClassInstance(new Number(10))).toBeTruthy();
            expect(isClassInstance(new String("EU SOU"))).toBeTruthy();
            expect(isClassInstance(new Boolean(false))).toBeTruthy();
            expect(isClassInstance([])).toBeTruthy();
        });

        it("Deve validar que o dado passado NÃO é uma instância de classe", () => {
            function foo() {
                return "bar";
            }

            expect(isClassInstance("NÃO SOU MESMO")).toBeFalsy();
            expect(isClassInstance(123)).toBeFalsy();
            expect(isClassInstance(false)).toBeFalsy();
            expect(isClassInstance(null)).toBeFalsy();
            expect(isClassInstance({ foo: "", bar: "" })).toBeFalsy();
            expect(isClassInstance({})).toBeFalsy();
            expect(isClassInstance(undefined)).toBeFalsy();
            expect(isClassInstance(() => {})).toBeFalsy();
            expect(isClassInstance(foo)).toBeFalsy();
        });
    });

    describe("FUNÇÃO - omitProp", () => {
        const data = {
            foo: "hi",
            bar: "hi",
        };

        it("Deve remover campos de um objeto e retornar um novo.", () => {
            expect(omitProp(data, ["bar"])).toEqual({ foo: "hi" });
            expect(omitProp(data, ["foo"])).toEqual({ bar: "hi" });
            expect(omitProp({ ...data, a: { b: 2 } }, ["foo", "a"])).toEqual({ bar: "hi" });
            expect(omitProp(data, ["foo", "bar"])).toEqual({});
            expect(omitProp(data, ["foo", "bar"])).not.toEqual(data);
        });

        it("Deve manter o objeto original", () => {
            expect(omitProp(data, [])).toEqual(data);
            expect(omitProp(data, ["foobar" as keyof typeof data])).toEqual(data);
        });

        it("Deve remover campos de um objeto só em seu primeiro nível", () => {
            const dataWithSubProp = { a: { b: 2 } };
            expect(omitProp(dataWithSubProp, ["a.b" as keyof typeof dataWithSubProp])).toEqual(dataWithSubProp);
            expect(omitProp(dataWithSubProp, ["b" as keyof typeof dataWithSubProp])).toEqual(dataWithSubProp);
        });

        it("Deve remover campos do objeto original", () => {
            const result = omitProp(data, ["foo"], false);
            expect(result === data).toBeTruthy();
        });
    });

    describe("FUNÇÃO - omitUndefinedProps", () => {
        it("Deve remover os campos undefined em primeiro nível", () => {
            const data = {
                foo: 1,
                bar: undefined,
            };
            expect(omitUndefinedProps(data)).toEqual({ foo: 1 });
        });

        it("Deve remover os campos undefined em vários níveis", () => {
            const data = {
                foo: 1,
                bar: undefined,
                a: {
                    b: 1,
                    c: undefined,
                    d: {
                        e: 1,
                        f: null,
                        g: undefined,
                    },
                },
            };

            const result = {
                foo: 1,
                a: {
                    b: 1,
                    d: {
                        e: 1,
                        f: null,
                    },
                },
            };

            expect(omitUndefinedProps(data)).toEqual(result);
        });

        it("Deve garantir que instâncias de classe se manterão", () => {
            const instanciaDeClasse = new Date();
            const data = {
                foo: 1,
                bar: undefined,
                date: instanciaDeClasse,
            };

            expect(omitUndefinedProps(data).date).toBeInstanceOf(Date);
        });
    });
});
