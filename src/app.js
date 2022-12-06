const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT



mongoose.connect('mongodb://127.0.0.1:27017/ecommerceApi')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


app.use(express.json())
// app.use(userRouter)
// app.use(itemRouter)
// app.use(cartRouter)
// app.use(orderRouter)




app.listen(port, () => {
    console.log('server listening on port ' + port)
})