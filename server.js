import app from './index.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running at port ${ PORT }`))

export default app