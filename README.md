# Prim+RPC Starter Project

👷 This is the starter project for [the related blog post](https://blog.doseofted.me/javascript-as-a-query-language).

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/doseofted/prim-rpc-starter/tree/follow-along)

> The [completed project is also available](https://github.com/doseofted/prim-rpc-starter) if you have any trouble.

In this project, we have a web server in Node and a website built with Vite:

- [`server/module.ts`](./server/index.ts) is where your functions are created
- [`server/index.ts`](./server/index.ts) is the Prim+RPC server, using the Fetch API
- [`client/prim.ts`](./client/prim.ts) is the Prim+RPC client, using the Fetch API
- [`client/index.ts`](./client/index.ts) is where your functions are called

You can start this project in development mode by running:

```zsh
npm install
npm run dev
```

[Read the Blog Article](https://blog.doseofted.me/javascript-as-a-query-language)
