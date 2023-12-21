import { capitalizeFirstLetterOfEachWord, formatCNPJ, getNameInitials, hideEmail, isUrl } from "./";

export default describe("UNIT - Testando utilitário de strings", () => {
    describe("FUNÇÃO - hideEmail", () => {
        it("Deve esconder corretamente um email escondido", () => {
            const email = "test@example.com";
            const result = hideEmail(email);
            expect(result).toBe("te***@example.com");
        });

        it("Deve esconder corretamente um email pequeno escondido", () => {
            const email = "a@example.com";
            const result = hideEmail(email);
            expect(result).toBe("***@example.com");
        });

        it("Deve retornar o próprio valor se não for um email válido", () => {
            const email = "";
            const email2 = "@teste.com";
            const email3 = "11@teste.com.";
            const email4 = "não é um email";

            const result = hideEmail(email);
            expect(result).toBe(email);

            const result2 = hideEmail(email2);
            expect(result2).toBe(email2);

            const result3 = hideEmail(email3);
            expect(result3).toBe(email3);

            const result4 = hideEmail(email4);
            expect(result4).toBe(email4);
        });
    });

    describe("FUNÇÃO - formatCNPJ", () => {
        it("Deve retornar o CNPJ formatado com pontuação", () => {
            const cnpj = "12345678901234";
            const cnpjFormatado = formatCNPJ(cnpj);
            expect(cnpjFormatado).toBe("12.345.678/9012-34");
        });

        it("Deve retornar o CNPJ formatado com um input já pontuado", () => {
            const cnpj = "12.345.678/9012-34";
            const cnpjFormatado = formatCNPJ(cnpj);
            expect(cnpjFormatado).toBe("12.345.678/9012-34");
        });

        it("Deve lançar um erro se o CNPJ não tiver 14 dígitos", () => {
            const cnpj = "1234567890";
            expect(() => {
                formatCNPJ(cnpj);
            }).toThrowError("CNPJ inválido. Certifique-se de inserir 14 dígitos.");
        });

        it("Deve remover caracteres não numéricos antes de formatar", () => {
            const cnpj = "12a34b56789c01d234";
            const cnpjFormatado = formatCNPJ(cnpj);
            expect(cnpjFormatado).toBe("12.345.678/9012-34");
        });
    });

    describe("FUNÇÃO - isURL", () => {
        const baseUrl = "https://developer.mozilla.org";

        it("Deve validar uma URL verdadeiramente", () => {
            const result = isUrl(baseUrl);
            const result2 = isUrl("http://localhost:3333");

            expect(result).toBeTruthy();
            expect(result2).toBeTruthy();
        });

        it("Deve validar uma URL falsamente", () => {
            const result = isUrl("dfssdf");
            const result2 = isUrl("localhost:3333");

            expect(result).toBeFalsy();
            expect(result2).toBeFalsy();
        });
    });

    describe("FUNÇÃO - getNameInitials", () => {
        it("Deve recuperar as inicias corretamente de um nome.", () => {
            const result = getNameInitials("Augusto Davi da Mota");
            const resultWithSpaces = getNameInitials("   Augusto  Davi   da    Mota");

            expect(result).toBe("ADDM");
            expect(resultWithSpaces).toBe("ADDM");
        });

        it("Deve validar que as inicias não pertencem ao nome passado.", () => {
            const result = getNameInitials("Augusto Davi da Mota");
            expect("LPDN" !== result).toBeTruthy();
        });

        it("Deve retornar uma string vazia, pois não há nome.", () => {
            const result = getNameInitials("");
            const result2 = getNameInitials(" ");
            const result3 = getNameInitials("   ");

            expect(result).toBe("");
            expect(result2).toBe("");
            expect(result3).toBe("");
        });
    });

    describe("FUNÇÃO - capitalizeFirstLetterOfEachWord", () => {
        it("Deve tornar a primeira letra de cada palavra em maiúscula.", () => {
            const result = capitalizeFirstLetterOfEachWord("essa frase vai ser maiusculizada");
            const result2 = capitalizeFirstLetterOfEachWord("essa     frase    vai    ser     maiusculizada");
            const result3 = capitalizeFirstLetterOfEachWord("ABCDE");
            const result4 = capitalizeFirstLetterOfEachWord("Abcde");
            const result5 = capitalizeFirstLetterOfEachWord("aBCDE");

            expect(result).toBe("Essa Frase Vai Ser Maiusculizada");
            expect(result2).toBe("Essa     Frase    Vai    Ser     Maiusculizada");
            expect(result3).toBe("ABCDE");
            expect(result4).toBe("Abcde");
            expect(result5).toBe("ABCDE");
        });

        it("Deve retornar uma string vazia", () => {
            const result = capitalizeFirstLetterOfEachWord("");
            expect(result).toBe("");
        });

        it("Deve validar um caso incorreto de maiusculização", () => {
            const result = capitalizeFirstLetterOfEachWord("aBCDE");

            expect(result === "abcde").toBeFalsy();
            expect(result === "").toBeFalsy();
            expect(result === "aBCDE").toBeFalsy();
        });
    });
});
