import 'dotenv/config'
import express from 'express'
import { routeStructure, pickRandomItem, pureLangRoute, homePage } from './assets/routes.js'
import cors from 'cors'
import treblle from '@treblle/express'

const app = express()

app.use(express.json())
app.use(cors())
app.use(treblle({
    apiKey: process.env.TREBLLE_API_KEY,
    projectId: process.env.TREBLLE_PROJECT_ID,
    additionalFieldsToMask: []
}))

app.get('/:lang', pureLangRoute)
app.get('/:lang/:type', routeStructure)
app.get('/:lang/:type/random', pickRandomItem)
app.get('/', homePage)

export default app