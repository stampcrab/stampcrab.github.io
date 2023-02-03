let express = require('express');
let path = require('path');
let app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Form 1</title>
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
  res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});

app.get('/output', (req, res) => {
  let name = req.query.name;
  if (!name) {
    name = "person";
  }
  res.send(`Welcome ${name} with age ${req.query.age}`);
});


app.listen(5000);