# Portfólio do Guilherme Gomes Máximo

Portfólio pessoal de uma página, feito com **Next.js (App Router), TypeScript, Tailwind CSS e Framer Motion**. A capa interativa usa pastas como navegação e se adapta a celular, teclado e preferência por movimento reduzido.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

Importe o repositório no painel da Vercel e mantenha o preset Next.js e os comandos padrão. O deploy é feito automaticamente a cada atualização da branch principal.

Adicione o arquivo de currículo em `public/curriculo.pdf` para ativar o botão de download.

## Estrutura

- `data/portfolio.ts`: conteúdo do portfólio em um único arquivo.
- `components/Cover.tsx`: capa e navegação em pastas.
- `components/FolderPanel.tsx`: conteúdo das seções.
- `components/FolderTab.tsx`: aba de retorno.
- `components/ProjectCard.tsx`: cartões e detalhes dos projetos.
- `components/Timeline.tsx`: linha do tempo da formação.
