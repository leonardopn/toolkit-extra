# `formatCNPJ`

Formata uma string de CNPJ adicionando pontuação.

>**ATENÇÃO:** A função só formata uma string para um formato pontuado de CNPJ, não há nenhuma validação se números presentes são válidos tirando o fator de validar a quantidade de dígitos (14).

## Uso

```ts
import { formatCNPJ } from "toolkit-extra/string";
     
formatCNPJ("12345678901234"); // "12.345.678/9012-34"       
formatCNPJ("12.345.678/9012-34"); // "12.345.678/9012-34"    
formatCNPJ("12a34b56789c01d234") // "12.345.678/9012-34"
formatCNPJ("1234567890"); // Error("CNPJ inválido. Certifique-se de inserir 14 dígitos.")       
```

## Referência

```ts
/**
 * @description Formata uma string de CNPJ adicionando pontuação.
 * @param cnpj - A string de CNPJ a ser formatada.
 * @returns A string de CNPJ formatada com pontuação.
 * @throws {Error} Se o CNPJ de entrada for inválido (não contiver 14 dígitos).
 */
export function formatCNPJ(cnpj: string): string {
    //NOTE: Remove todos os caracteres não numéricos do CNPJ
    const cnpjSemPontuacao = cnpj.replace(/\D/g, "");

    //NOTE: Verifica se o CNPJ possui a quantidade correta de dígitos
    if (cnpjSemPontuacao.length !== 14) {
        throw new Error("CNPJ inválido. Certifique-se de inserir 14 dígitos.");
    }

    //NOTE: Aplica a formatação com pontuação
    cnpjSemPontuacao.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");

    return cnpjFormatado;
}
```
