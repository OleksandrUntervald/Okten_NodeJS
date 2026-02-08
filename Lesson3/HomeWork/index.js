const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    { id: 1, name: 'saha',   email: 'saha1@mail.com',  password: 'pass1', age: 25 },
    { id: 2, name: 'ivan',   email: 'ivan@mail.com',   password: 'pass2', age: 30 },
    { id: 3, name: 'olena',  email: 'olena@mail.com',  password: 'pass3', age: 22 },
    { id: 4, name: 'petro',  email: 'petro@mail.com',  password: 'pass4', age: 28 },
    { id: 5, name: 'andrii', email: 'andrii@mail.com', password: 'pass5', age: 35 },
    { id: 6, name: 'maria',  email: 'maria@mail.com',  password: 'pass6', age: 27 },
    { id: 7, name: 'oleh',   email: 'oleh@mail.com',   password: 'pass7', age: 40 },
    { id: 8, name: 'anna',   email: 'anna@mail.com',   password: 'pass8', age: 19 },
    { id: 9, name: 'roman',  email: 'roman@mail.com',  password: 'pass9', age: 33 },
    { id: 10, name: 'ira',   email: 'ira@mail.com',    password: 'pass10', age: 24 }
];

// GET усі юзери
app.get('/users', (req, res) => {
    try {
        res.send(users);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.post('/users', (req, res) => {
    try {
        const { name, email, password, age } = req.body; // Додано age

        if (!name || name.length < 3) {
            return res.status(400).send("Name must be at least 3 characters long");
        }
        // Тепер age визначено і валідація спрацює
        if (age === undefined || age < 0) {
            return res.status(400).send("Age must be 0 or greater");
        }

        const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        const newUser = { id, name, email, password, age };
        users.push(newUser);
        res.status(201).send(newUser);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// GET юзер по ID
app.get('/users/:usersId', (req, res) => {
    try {
        const userId = Number(req.params.usersId);
        const user = users.find(user => user.id === userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// PUT оновлення юзера з валідацією
app.put('/users/:usersId', (req, res) => {
    try {
        const userId = Number(req.params.usersId); // виправлено
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }

        const { name, email, password, age } = req.body;

        // Валідація
        if (!name || name.length < 3) {
            return res.status(400).send("Name must be at least 3 characters long");
        }
        if (age == null || age < 0) {
            return res.status(400).send("Age must be 0 or greater");
        }

        users[userIndex] = { ...users[userIndex], name, email, password, age };
        res.status(200).send(users[userIndex]);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// DELETE юзера
app.delete('/users/:usersId', (req, res) => {
    try {
        const userId = Number(req.params.usersId); // виправлено
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }
        users.splice(userIndex, 1);
        res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.listen(3000, () => {
    console.log(`Server is good`);
});
