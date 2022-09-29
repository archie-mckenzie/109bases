//---------SETUP---------//

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

//---------GETTING---------//

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//---------MAGIC---------//

app.post('/Leaderboard', async (req, res) => {
    
});

//---------LISTENING---------//

app.listen(process.env.PORT || port, async () => {
    console.log("Wordsworth server running...");
    await DBclient.connect().then(result => {
        console.log("Connecting to database...");
    })
});