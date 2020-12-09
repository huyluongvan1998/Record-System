const express = require('express');
const app = express();
const connectDB = require('./config/db');

//connect DB
connectDB();

//import to get data from req.body
app.use(express.json({ extended: false }));

// test route
app.get('/', (req, res) => {
    console.log("hello");
    res.send('hello');
})

app.use('/api/users', require('./routes/api/users'));

//turn on server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server run in PORT ${PORT}`);
});