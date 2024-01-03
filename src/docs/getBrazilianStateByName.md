# `getBrazilianStateByName`

Busca um estado brasileiro pelo seu nome e retorna um objeto contendo suas iniciais e seu nome.

## Uso

```ts
import {getBrazilianStateByName} from "toolkit-extra/address";

getBrazilianStateByName() // null
getBrazilianStateByName(null) // null
getBrazilianStateByName("NÃO EXISTE") // null
getBrazilianStateByName("SP")  // null
getBrazilianStateByName("São Paulo")
/*{
   "name": "São Paulo",
   "initials": "SP"
}*/
```

## Referência

```ts
getBrazilianStateByName("name")
```

- **`name?: string | null`** - Nome do estado que será buscado.;
