const app = require("./src/app.js")
const connectDB=require("./src/config/db.js")
require("dotenv").config();

connectDB()
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})