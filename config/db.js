const config = require('config');
const conn = config.get('mongoUrl');

const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(conn, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('DB connected');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;