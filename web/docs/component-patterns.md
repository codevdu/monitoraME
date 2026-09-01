# Padrões de Componentes

## Limites SOLID

- Mantenha cada módulo com apenas um motivo claro para mudar.
- Dependa de contratos pequenos, como `HttpClient`, e não diretamente do Axios fora do adapter de API.
- Adicione novos comportamentos de API compondo uma função de service ou um adapter, sem alterar componentes de UI sem necessidade.
- Mantenha componentes de UI dependentes de dados tipados e callbacks, não de detalhes de transporte.

## Server Components

- Use Server Components por padrão para pages, layouts e seções somente de leitura.
- Busque dados iniciais no servidor quando eles forem necessários para renderizar a página.
- Mantenha secrets, tokens, variáveis privadas de ambiente e chamadas privilegiadas fora de Client Components.
- Valide respostas de API com schemas de `@/schemas` antes de passar dados para componentes de UI.

## Client Components

- Adicione `"use client"` apenas quando o componente precisar de APIs do browser, events, states, effects ou primitivas interativas.
- Mantenha Client Components focados em interação: toggles, menus, formulários, filtros, gráficos e atualizações em tempo real.
- Receba dados já preparados por props sempre que possível.
- Use funções de service apoiadas em `@/services/api` para requests disparadas após a hidratação.

## Schemas e Types Compartilhados

- Coloque schemas de validação em runtime em `schemas/`.
- Exporte types inferidos em `types/`.
- Prefira derivar types a partir dos schemas Zod em vez de duplicar contratos manualmente.

## Fluxo de Dados

- A Server Page busca e valida os dados.
- A Server Page passa dados tipados para componentes apresentacionais.
- O Client Component lida com interação local e chama funções de service somente para ações que acontecem depois da hidratação.
