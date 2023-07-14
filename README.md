# Organo - app de organogramas

## Link do Projeto
Acesse aqui: <a href="https://alanserafim-react-organo.vercel.app" target="_blank">ORGANO</a>

## Figma do projeto

Acesse aqui: <a href="https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?type=design&node-id=134-128&t=vGRD7ytzutui9BpO-0" target="_blank"> Style Guide, Wireframes, Mockups </a>

### Abordagem de desenvolvimento

A partir do figma seguiremos a bordagem top-down
> Começando pelo topo da página

| N. | Componente | Conceito trabalhado |
|--- |--- |---
| 1 | Banner | function componentes
| 2 | Campo Texto | estilização
| 3 | Formulário | props
| 4 | Campo Select | map
| 5 | Botão | data binding
| 6 | Lógica do Formulário | useState, OnChage
| 7 | TimeContainer | dumb components, recebendo css via js
| 8 | Time | filter, renderização condicional, debugger
| 9 | DeletaColaborador | closures, props, funcionamento interno, ícones
|10 | InputCor | Inputs controlados, Virtual DOM, imperatividade, declaratividade
|11 | Refatoração | ID únicos com UUID, One Way Data Binding, funções como parâmetros


### Estrutura

Function components declarados em arrow functions e identificados por constantes. Cada componente possui: 

1. Diretório próprio
2. Arquivo index.js
3. Arquivo Component.css

### Migrando para o Typescript

| N. | Conceito trabalhado 
|--- |--- 
| 1 | instalando dependencias necessários para iniciar a migração de um projeto React de JS para TS, Gerar o tsconfig.json a partir do script npx, Diferenciar arquivos js, jsx, ts e tsx.
| 2 | Configurar o jsx no tsconfig.json, Configurar o jsx no tsconfig.json, Inferir os tipos de variáveis geradas pela desconstrução das props
| 3 | Criar interfaces, Entender a diferença entre type e Interface, Configurar propriedades opcionais nas interfaces, Tipar funções
| 4 | Utilizar fragmentos React, Utilizar fragmentos React
| 5 | Vantagens e desvantagens do TypeScript, Configurar regras no tsconfig.json
