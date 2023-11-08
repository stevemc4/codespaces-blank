import { handle } from 'https://deno.land/x/hono@v3.9.2/adapter/netlify/mod.ts'
import { Hono } from 'https://deno.land/x/hono@v3.9.2/mod.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.text('>Apakah LRT Jabodebek rungkad?\n-nggak tau, webnya belom jadi soalnya')
})

app.get('/country', (c) => {
  return c.text('Hello Hono!')
})

export default handle(app)
