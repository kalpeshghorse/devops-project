const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    tasks.push(req.body.task);
    res.send("Task added");
});

app.delete('/tasks/:id', (req, res) => {
    tasks.splice(req.params.id, 1);
    res.send("Task deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
