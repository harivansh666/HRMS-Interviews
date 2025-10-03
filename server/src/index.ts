import express from 'express';

const app = express()

app.get("/", (req, res) => {

    res.json({ message: "workign aa bro" })
})


app.listen(3000)

