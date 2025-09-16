import "dotenv/config";  // loads .env automatically

import express from "express";
import registerRouter from "./routes/register.js"
import loginRouter from "./routes/login.js"

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/register', registerRouter)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

