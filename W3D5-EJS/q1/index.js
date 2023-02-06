const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'view', 'css')));

const date = new Date();
const hour = date.getHours();
let cssfile = "night.css";
if (hour >= 6 && hour <= 18) {
    cssfile = "day.css";
}

app.get('/', (req, res) => {
    const date = new Date();
    res.render("index", {
        time: date.toTimeString(),
        cssFileName: cssfile
    });
});
app.listen(3000);