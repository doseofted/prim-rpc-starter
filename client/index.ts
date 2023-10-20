import { client } from "./prim"

const greeting = await client.sayHello()
console.log(greeting) // "Frontend, meet Backend."

const app = document.getElementById("app")
if (app) app.innerText = greeting

// NOTE: ignore this bit: it's just here for development mode
const delayReload = () => setTimeout(location.reload, 300)
if (import.meta.env.DEV) fetch("http://localhost:3000/prim").catch(delayReload)
