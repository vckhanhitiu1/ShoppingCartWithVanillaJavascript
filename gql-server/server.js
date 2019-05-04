var express = require('express');
var express_grapgql = require('express-graphql');
var { buildSchema } = require('graphql');
//GraphQL Schema
var schema = buildSchema(`
    type Query{
        message: String
    }
`);

var root = {
    message: () => 'Hello World'
}

var app = express();
app.use('/graphql', express_grapgql({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(400, () => {
    console.log("Express GrapghQl is running on localhost")
})