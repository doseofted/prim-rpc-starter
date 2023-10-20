import { client } from "./client"

// NOTE: ignore this line: it's just for development mode
if (import.meta.env.DEV) fetch("http://localhost:3001/prim").catch(() => setTimeout(() => location.reload(), 300))

const greeting = await client.sayHello()
console.log(greeting) // "Frontend, meet Backend."

const app = document.getElementById("app")
if (app) app.innerText = greeting

export {}
