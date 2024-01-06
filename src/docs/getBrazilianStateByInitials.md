# `getBrazilianStateByInitials`

Busca um estado brasileiro pela sua inicial e retorna um objeto contendo suas iniciais e seu nome.

## Uso

```ts
import {getBrazilianStateByInitials} from "toolkit-extra/address";

getBrazilianStateByInitials() // null
getBrazilianStateByInitials("NÃO EXISTE") // null
getBrazilianStateByInitials("SP") 
/*{
   "name": "São Paulo",
   "initials": "SP"
}*/
```

## Referência

```ts
getBrazilianStateByInitials("initials")
```

- **`initials?: string`** - Iniciais do estado que será buscado.;
