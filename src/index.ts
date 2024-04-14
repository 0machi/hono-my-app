import { Hono } from 'hono'

type Bindings = {
  ENV: string;
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.text(`Hello Hono! from ${c.env.ENV}`)
})

export default app
