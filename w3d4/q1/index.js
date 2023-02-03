const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!age) {
        age = 0;
    }
    if (!name) {
        name = "person";
    }
    res.send(`Welcome ${name} with age ${age}`);
});
app.listen(3000);