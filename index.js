import express from 'express'
import { routeStructure, pickRandomItem } from './assets/routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/:lang/:type', routeStructure)
app.get('/:lang/:type/random', pickRandomItem)
app.get('/', (req, res) => res.send('ApiPotter!'))

app.listen(PORT, () => console.log(`Server running at port ${ PORT }`))