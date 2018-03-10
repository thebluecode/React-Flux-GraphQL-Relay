import fs from 'fs';
import express from 'express';
import config from './config';
import Schema from './data/schema';
import  GraphQLHttp from 'express-graphql';
import { MongoClient } from 'mongodb';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

let app = express();

app.use(express.static('public'));

(async () => {
    try {
        let client = await MongoClient.connect(config.MONGO_URL);

        let db = client.db(config.RGRJS_DB);

        let schema = Schema(db);

        app.use('/graphql', GraphQLHttp({
            schema,
            graphiql: true
        }));
        
        app.listen(3000, () => { console.log('Listening port 3000'); });

        // Generate schema.json
        let json = await graphql(schema, introspectionQuery);

        fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
            if (err) throw err;

            console.log('JSON schema created');
        });
    } catch (error) {
        console.log(error);
    }
})();

// MongoClient.connect(config.MONGO_URL, (err, client) => {
//     if (err) throw err;
    
//     db = client.db(config.RGRJS_DB);

//     app.use('/graphql', GraphQLHttp({
//         schema: schema(db),
//         graphiql: true
//     }));

//     app.listen(3000, () => {
//         console.log('Listening port 3000');
//     });
    
// });

// app.get('/data/links', (req, res) => {
//     db.collection(config.LINKS_COLLECTION)
//     .find({})
//     .toArray((err, links) => {     
//         if (err) throw err;

//         res.json(links);
//     });
// });

