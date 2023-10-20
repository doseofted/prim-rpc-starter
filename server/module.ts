export function sayHello(x = "Backend", y = "Frontend") {
	return `${x}, meet ${y}.`
}
sayHello.rpc = true
