# Prim+RPC Starter Project

📖 This is the completed project from
[from the related blog post](https://blog.doseofted.me/transparent-rpc-for-javascript).

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/doseofted/prim-rpc-starter/tree/main)

> Looking for the starter project? It's
> [available here](https://github.com/doseofted/prim-rpc-starter/tree/follow-along)!

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

[Read the Blog Article](https://blog.doseofted.me/transparent-rpc-for-javascript)
