import express from 'express'
import { routeStructure, pickRandomItem, pureLangRoute, homePage } from './assets/routes.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/:lang', pureLangRoute)
app.get('/:lang/:type', routeStructure)
app.get('/:lang/:type/random', pickRandomItem)
app.get('/', homePage)

app.listen(PORT, () => console.log(`Server running at port ${ PORT }`))