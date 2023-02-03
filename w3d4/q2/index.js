let express = require('express');
let path = require('path');
let app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post("/result", function (req, res) {
    res.send(`Welcome ${req.body.name} and your age is ${req.body.age}`);
});

app.listen(5000);