# `moveElement`

Função que move um elemento para outra posição dentro de um array.

Basicamente a função move os elementos por `index` no array, então, baseado nas regras de negócio espere os seguintes efeitos:

- Se não achar o elemento, emite um erro;
- Se o index for maior que o tamanho do array, o elemento é movido para a última posição;
- Se o index for menor que 0, o elemento é movido para a primeira posição;
- Se o item já estiver na posição indicada, é retornado um array de conteúdo igual ao original;

## :mega: Informações importantes

>**ATENÇÃO:** A função está preparada para mover elementos primitivos já que sua validação para encontrar o elemento no array é bem rasa. Não há planos para permitir mover tipos mais complexos por agora. Caso ache necessário, abra um PR ou pode me chamar para tentarmos criar algo aqui.
>
>**ATENÇÃO 2:** Fique atento ao campo `returnNewArray`. Por padrão a função sempre retorna um novo array para manter os requisitos de imutabilidade, porém, se você passar essa propriedade como `false`, esteja ciente que o seu array original será alterado.

## Uso

```ts
import { moveElement } from "toolkit-extra/array";

const arrayToTest = [1, 2, 3, 4];

moveElement(arrayToTest, 2, 1) // [1, 2, 3, 4];
moveElement(arrayToTest, 2, 0) // [2, 1, 3, 4];
moveElement(arrayToTest, 2, 6); // [1, 3, 4, 2];
moveElement(arrayToTest, 2, -3); // [2, 1, 3, 4];
moveElement(arrayToTest, 5, 2); //  Error: Elemento não encontrado no array;
moveElement(arrayToTest, 2, 0, false); // Muda o array original. arrayToTest agora é [2, 1, 3, 4];
```

## Referência

```ts
/**
 * @description Função que move um elemento para outra posição dentro de um array.
 * @param array O array de elementos que iremos usar para movimentar um elemento.
 * @param element O elemento que iremos mover dentro do array.
 * @param newPosition A nova posição que o elemento deve ter no array.
 * @param returnNewArray Um valor opcional que determina se devemos retorna um novo array, ou se o array original deve ser retornado. Padrão: `true`.
 * @returns O array original ou um novo array, porém o valor indicado em `element` foi movido para uma posição especificada em `newPosition`.
 */
export function moveElement<T>(array: T[], element: T, newPosition: number, returnNewArray = true) {
    if (returnNewArray) {
        const newArray = [...array];
        const index = newArray.indexOf(element);

        if (index === -1) throw new Error("Elemento não encontrado no array");

        newArray.splice(index, 1);
        newArray.splice(newPosition, 0, element);
        return newArray;
    }

    const index = array.indexOf(element);

    if (index === -1) throw new Error("Elemento não encontrado no array");

    array.splice(index, 1);
    array.splice(newPosition, 0, element);
    return array;
}
```
