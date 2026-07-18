import app from './index.js'

const PORT = Number(process.env.PORT) || 3000

app.listen(PORT, () => console.log(`Server running at port ${ PORT }`))

export default app