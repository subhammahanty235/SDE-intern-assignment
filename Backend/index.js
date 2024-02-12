require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI).then(console.log("Database is connected")).catch((err) => { console.log(err) })


app.use(cors())

app.get("/", (req, res) => {
    res.send("Hi, I am live ");
});
app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/media', require('./routes/media.route'))



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is running on port : ${PORT}`)
})

