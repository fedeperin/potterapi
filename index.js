import express from 'express'
import { routeStructure, pickRandomItem } from './assets/routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/:lang/:type', routeStructure)
app.get('/:lang/:type/random', pickRandomItem)

app.listen(PORT, () => console.log(`Server running at port ${ PORT }`))

export default app