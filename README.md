
# toolkit-extra

[![npm](https://img.shields.io/npm/v/toolkit-extra)](https://www.npmjs.com/package/toolkit-extra)
[![npm](https://img.shields.io/npm/dm/toolkit-extra)](https://www.npmjs.com/package/toolkit-extra)

![GitHub Issues](https://img.shields.io/github/issues/leonardopn/toolkit-extra)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/leonardopn/toolkit-extra)
![Última Atualização](https://img.shields.io/github/last-commit/leonardopn/toolkit-extra)
![GitHub Forks](https://img.shields.io/github/forks/leonardopn/toolkit-extra)
![GitHub Stars](https://img.shields.io/github/stars/leonardopn/toolkit-extra)

[![codecov](https://codecov.io/gh/leonardopn/toolkit-extra/graph/badge.svg?token=SW854GY5YU)](https://codecov.io/gh/leonardopn/toolkit-extra)

![TypeScript](https://badgen.net/npm/types/toolkit-extra)
![Status](https://img.shields.io/badge/status-stable-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Biblioteca com vários módulos de funções rápidas que não estão disponíveis no JavaScript, mas aposto que você adoraria que estivessem.

## :bulb: Motivação

Sabe aqueles arquivos cheios de funções utilitárias que você criou em um projeto e fica copiando e colando sempre para outro projeto? Então, eu me cansei disso e criei minha biblioteca para agrupar essas funções.

Em todos os projetos que trabalhei, em algum momento entrava em uma repetição chata de criar uma pasta `utils/GRUPO_DE_FUNÇÕES/index.ts`, buscar o arquivo de funções de algum outro projeto, copiar e colar no novo projeto. Com o tempo, comecei a notar muita repetição de código e até pior, código que deveria fazer a mesma coisa, mas em versões diferentes e sem testes.

Então parei um tempo da minha vida para trazer as funções mais utilizadas em meus projetos para cá, adicionar testes e comentá-las.

## :mega: AVISO IMPORTANTE

O foco dessa biblioteca sempre foi resolver **MEUS** problemas de código, então ao criá-la, tentei solucioná-los antes de realmente tentar fornecê-los para uma comunidade. No entanto, ainda é um objetivo tornar essa biblioteca madura o suficiente para esse propósito. Então, você está livre para me aconselhar nessa jornada e contribuir se possível.

## :minidisc: Instalação

Para instalar a biblioteca, é necessário que você tenha instalado algum gerenciador de pacotes como `npm`, `yarn` ou `pnpm`.

```bash
npm i toolkit-extra 
```

ou

```bash
yarn add toolkit-extra
```

ou

```bash
pnpm i toolkit-extra
```

## :tada: Uso

>Por ser uma biblioteca de utilitários, optei por fazer uma biblioteca `commonjs` para poder fornecer compatibilidade com vários tipos de ambientes e evitar problemas.

Cada função está dentro de um módulo ou grupo de funções. Então, para usar uma função, recomendo que você faça da seguinte forma:

***CommonJS***

```javascript
const { omitUndefinedProps } = require("toolkit-extra/object");

omitUndefinedProps({ foo: 1, bar: undefined }); // { foo: 1 }
```

***ESM***

```javascript
import { omitUndefinedProps } from "toolkit-extra/object";

omitUndefinedProps({ foo: 1, bar: undefined }); // { foo: 1 }
```

Se preferir, pode importar diretamente do módulo principal, porém isso pode resultar em uma importação um pouco mais pesada do que a importação modular.

***CommonJS***

```javascript
const { omitUndefinedProps } = require("toolkit-extra");

omitUndefinedProps({ foo: 1, bar: undefined }); // { foo: 1 }
```

***ESM***

```javascript
import { omitUndefinedProps } from "toolkit-extra";

omitUndefinedProps({ foo: 1, bar: undefined }); // { foo: 1 }
```

## :mag_right: Módulos

Estes são os módulos e suas respectivas documentações para cada função.

- **Address**
  - [`getBrazilianStateByInitials`](./src/docs/getBrazilianStateByInitials.md) - Busca um estado brasileiro pela sua inicial.
  - [`getBrazilianStateByName`](./src/docs/getBrazilianStateByName.md) - Busca um estado brasileiro pelo seu nome.
  - [`getBrazilianStates`](./src/docs/getBrazilianStates.md) - Função que retorna um array com todos os estados brasileiros.
- **Array**
  - [`deleteDuplicate`](./src/docs/deleteDuplicate.md) - Função que remove elementos duplicados do array e retorna um novo array só com itens únicos.
  - [`generateArray`](./src/docs/generateArray.md) - Função que cria um array de tamanho `n` já preenchido com valores.
  - [`getMinMax`](./src/docs/getMinMax.md) - Função que retorna o valor mínimo e máximo de um array de números.
  - [`repeatArray`](./src/docs/repeatArray.md) - Função que pega um array inicial e repete seu conteúdo em um novo array `n` vezes.
  - [`isArrayTyped`](./src/docs/isArrayTyped.md) - Função que valida se todos os elementos de um array são de um determinado tipo.
  - [`moveElement`](./src/docs/moveElement.md) - Função que move um elemento para outra posição dentro de um array.
- **Math**
  - [`average`](./src/docs/average.md) - Função para calcular a média de valores em um array de números.
  - [`mode`](./src/docs/mode.md) - Função que diz qual é a moda inclusa em um array de números. (Números que mais se repetem).
  - [`verifyPAPresence`](./src/docs/verifyPAPresence.md) - Função que verifica se um número está presente em uma Progressão Aritmética (PA).
- **Object**
  - [`isClassInstance`](./src/docs/isClassInstance.md) - Verifica se o valor passado é uma instância de classe.
  - [`omitProp`](./src/docs/omitProp.md) - Omite propriedades de um objeto.
  - [`omitUndefinedProps`](./src/docs/omitUndefinedProps.md) - Remove propriedades undefined de um objeto em todos os níveis de aninhamento.
- **Random**
  - [`getRandomNumber`](./src/docs/getRandomNumber.md) - Função que gera um número aleatório entre dois números.
- **Regex**
  - [`verifyMaskedBrazilianPhones`](./src/docs/verifyMaskedBrazilianPhones.md) - Valida um número de telefone brasileiro com mascaras (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.
- **String**
  - [`capitalizeFirstLetterOfEachWord`](./src/docs/capitalizeFirstLetterOfEachWord.md) - Maiusculiza a primeira letra de cada palavra no texto fornecido.
  - [`formatCNPJ`](./src/docs/formatCNPJ.md) - Formata uma string de CNPJ adicionando pontuação.
  - [`getNameInitials`](./src/docs/getNameInitials.md) - Função que retorna as iniciais do nome fornecido.
  - [`hideEmail`](./src/docs/hideEmail.md) - Oculta parte do email fornecido.
  - [`isUrl`](./src/docs/isUrl.md) - Verifica se o texto fornecido é uma URL válida.
- **Timeout**
  - [`sleep`](./src/docs/sleep.md) - Função parecida com a função timeout do javascript, porém, retorna uma promise.
  - [`timeoutAsync`](./src/docs/timeoutAsync.md) - Função timeout para aguardar um tempo determinado porém, é assíncrona.
- **uuid**
  - [`v4`](./src/docs/uuidv4.md) - Função que gera um UUID v4.

## :handshake: Contribuição

Para contribuir com a biblioteca é simples. Siga esses passos:

1. Clone o repositório.
2. Crie uma branch a partir de `develop` no padrão git-flow.
3. Implemente suas ideias, soluções, correções, etc.
4. Abra um PR.

## :memo: Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

Feito com :heart: por [Leonardo Petta do Nascimento](https://github.com/leonardopn)
