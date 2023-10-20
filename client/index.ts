import { client } from "./prim"

const greeting = await client.sayHello()
console.log(greeting) // "Frontend, meet Backend."

const app = document.getElementById("app")
if (app) app.innerText = greeting

// NOTE: ignore this bit: it's just here to make sure the server is running
if (import.meta.env.DEV)
	fetch("http://localhost:3000/prim").catch(() =>
		setTimeout(location.reload, 300)
	)
