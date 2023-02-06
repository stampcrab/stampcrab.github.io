let express = require('express');
let app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

app.post("/result", function (req, res) {
    res.render('result', { age: req.body.age, name: req.body.name, });
});

app.listen(3000);