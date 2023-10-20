import { createPrimClient } from "@doseofted/prim-rpc"
import { createMethodPlugin } from "@doseofted/prim-rpc-plugins/browser-fetch"
import type { Module } from "@example/server"
 
export const client = createPrimClient<Module>({
	endpoint: "http://localhost:3000/prim",
	methodPlugin: createMethodPlugin(),
})
export default client
