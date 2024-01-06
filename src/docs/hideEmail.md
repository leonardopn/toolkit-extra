# `hideEmail`

Função que oculta parte do email fornecido.

>Fique atento aos seguintes casos:
>
>- Se o email for muito curto como por exemplo `a@example.com`, o email retornado será: `***@example.com`.
>- Se o email não for válido, o dado original passado será retornado

## Uso

```ts
import { hideEmail } from "toolkit-extra/string";
     
hideEmail("test@example.com"); // te***@example.com
hideEmail("a@example.com"); // ***@example.com
hideEmail("@teste.com"); // @teste.com
```

## Referência

```ts
/**
 * Oculta parte do email fornecido.
 * @param {string} email - O email do usuário.
 * @returns {string} O email com parte ocultada.
 */
export function hideEmail(email: string): string {
    let avg: number;
    let splitted: string[];
    let part1 = "";
    let part2 = "";

    const validation = z.string().email().safeParse(email);

    if (validation.success) {
        splitted = email.split("@");
        part1 = splitted[0] || "";
        avg = part1.length / 2;
        part1 = part1.substring(0, part1.length - avg);
        part2 = splitted[1] || "";

        return part1 + "***@" + part2;
    } else {
        return email;
    }
}
```
