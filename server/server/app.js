const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;

mongoose.connect("mongodb+srv://artTina:art1234@cluster0.h8oqfsw.mongodb.net/graphql-tutorial?retryWrites=true&w=majority", {useNewUrlParser: true});

app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));



const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started!');
});