import express from 'express';
import config from './config';
import { MongoClient } from 'mongodb';

let app = express();

app.use(express.static('public'));

let db;

MongoClient.connect(config.MONGO_URL, (err, client) => {
    if (err) throw err;
    
    db = client.db(config.RGRJS_DB);

    app.listen(3000, () => {
        console.log('Listening port 3000');
    });
    
});

app.get('/data/links', (req, res) => {
    db.collection(config.LINKS_COLLECTION)
    .find({})
    .toArray((err, links) => {     
        if (err) throw err;

        res.json(links);
    });
});

