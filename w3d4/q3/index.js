let express = require('express');
let path = require('path');
let app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));

let cssfile;
const date = new Date();
const hour = date.getHours();

if (hour >= 6 && hour <= 18) {
    cssfile = "day.css"
}
else
    cssfile = "night.css"

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Form 1</title>
        <link href=/css/${cssfile} rel="stylesheet"/>
      </head>
      <body>
        <form action="/result" method="post">
          <label>Name</label>
          <input type="text" name="name" />
          <label>Age</label>
          <input type="text" name="age" />
          <input type="submit" value="Submit Query" />
        </form>
      </body>
    </html>`);
});

app.post("/result", function (req, res) {
    res.send(`Welcome ${req.body.name} and your age is ${req.body.age}`);
});

app.listen(5000);