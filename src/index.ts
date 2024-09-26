import express from "express";
const app = express()

app.get('/', (req, res) => {
    res.send("Succeesss")
})

app.listen(3000, () => {
    console.log("Success on ", 3000)
})