const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/feedback', (req, res) => {
    console.log('GET /api/pizza');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
        console.log(result.rows)
    }).catch((error) => {
        console.log('Error GET /feeback', error)
        res.sendStatus(500);
    });
})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});