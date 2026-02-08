const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    { id: 1, name: 'saha',   email: 'saha1@mail.com',  password: 'pass1' },
    { id: 2, name: 'ivan',   email: 'ivan@mail.com',   password: 'pass2' },
    { id: 3, name: 'olena',  email: 'olena@mail.com',  password: 'pass3' },
    { id: 4, name: 'petro',  email: 'petro@mail.com',  password: 'pass4' },
    { id: 5, name: 'andrii', email: 'andrii@mail.com', password: 'pass5' },
    { id: 6, name: 'maria',  email: 'maria@mail.com',  password: 'pass6' },
    { id: 7, name: 'oleh',   email: 'oleh@mail.com',   password: 'pass7' },
    { id: 8, name: 'anna',   email: 'anna@mail.com',   password: 'pass8' },
    { id: 9, name: 'roman',  email: 'roman@mail.com',  password: 'pass9' },
    { id: 10, name: 'ira',   email: 'ira@mail.com',    password: 'pass10' }
];


app.get('/users',(req, res) => {
    try {
        res.send(users);
    } catch (e) {
        res.send(500).send(e.message);
    }
});

app.post('/users',(req, res) => {
    try {
  const{name, email, password} = req.body;
  // TODO validate data
        const id = users[users.length - 1].id + 1;
        const newUser = {id, name, email, password};
        users.push(newUser)
        res.status(201).send(newUser)
    } catch (e){
        res.status(500).send(e.message)
    }
});


app.get('/users/:usersId',(req, res) => {
  try {
      const userId = Number(req.params.usersId);
      const user = users.find(user => user.id === userId)
      if (!user){
            return   res.status(404).send("User not found")
      }
      res.send(user)
  } catch (e){
      res.status(500).send(e.message)
  }
});

app.put('/users/:usersId',(req, res) => {
    try {
        const userId = Number(req.params.userId);
        const userIndex = users.findIndex(user => user.id === userId)
        if (userIndex === -1){
            return res.status(404).send('User not found')
        }
       const {name, email, password} = req.body;
        // TODO validate data
        users[userIndex] = {...users[userIndex], name, email, password}
        res.status(201).send(users[userIndex] )
    } catch (e){
        res.status(500).send(e.message)
    }
});



app.delete('/users/:usersId',(req, res) => {
    try {
        const userId = Number(req.params.usersId);
        const userIndex = users.findIndex(user => user.id === userId)
        if (userIndex === -1){
            return res.status(404).send('User not found')
        }
        users.splice(userIndex, 1)
        res.sendStatus(204)
    } catch (e){
        res.status(500).send(e.message)
    }
});

app.listen(3000, () =>{
    console.log(`Server is good`)
})



//     const server = http.createServer((req, res) => {
//        res.writeHead(200, {'Content-Type' : 'application/json'});
//        res.end(JSON.stringify({
//            data: 'Hello Bro111'
//        }));
//     });