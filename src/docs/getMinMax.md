# `getMinMax`

Função que retorna o valor mínimo e máximo de um array de números.

## Uso

```ts
import { getMinMax } from "toolkit-extra/array";

getMinMax([]) // { min: undefined; max: undefined }
getMinMax([1, 2]) // { min: 1; max: 2 }
getMinMax([1, 1]) // { min: 1; max: 1 }
getMinMax([], 10) // { min: 10; max: 10 }
```

## Referência

```ts
/**
 * @description Uma função que retorna o valor mínimo e máximo de um array de números
 * @param numbers Um array de números
 * @param defaultValue Um valor que será usado como default caso não exista valor mínimo ou máximo
 */
export function getMinMax(numbers: number[]): { min?: number; max?: number };
export function getMinMax(numbers: number[], defaultValue: number): { min: number; max: number };
export function getMinMax(
    numbers: number[],
    defaultValue?: number
): { min?: number; max?: number } | { min: number; max: number } {
    const minValue = min(numbers) ?? defaultValue;
    const maxValue = max(numbers) ?? defaultValue;

    if (defaultValue !== undefined) {
        return { min: minValue as number, max: maxValue as number };
    }

    return { min: minValue, max: maxValue };
}
```
