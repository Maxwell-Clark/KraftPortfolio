const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

const corsOpts = {
    origin: "*",

    methods: [
        'GET',
        'POST'
    ],

    allowedHeaders: [
        'Content-Type'
    ]
};

app.use(cors(corsOpts));

let jsonParser = bodyParser.json();

// Create connection
const db = mysql.createConnection({
    host    : 'localhost',
    user : 'root',
    password : 'Kira!sbest2020',
    database : 'blog'
});

// Connection
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL connected...')
})

//insert post
app.post('/posts', jsonParser, (req, res) => {
    let post = req.body
    // let post = {title:"First Post", body: "this is the first text post"};
    let sql = 'INSERT INTO posts SET ?';
    db.query(sql, {title: post.title, body: post.post}, (err, result) => {
        if(err) {
            throw err;
        } 
        res.send(`${post.title} Post added...`)
    })
})

//Update Posts
app.put('/posts/:id', (req, res) => {
    let updatedTitle =  "Updated Post";
    let updatedBody = "this is the updated post body!!!!";
    
    let sql = `UPDATE posts SET title = '${updatedTitle}', body = '${updatedBody}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(`post id: ${req.params.id} was updated...`);
    })
})

//Select all posts
app.get('/posts', (req, res) => {
    let sql = 'Select * FROM posts';
    db.query(sql, (err, results) => {
        if(err) throw results;
        console.log('Retreived Posts...', results);
        res.send(results);
    })
})

//Select One Post
app.get('/posts/:id', (req, res) => {
    let sql = `Select * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, results) => {
        if(err) throw results;
        console.log('Retrieved Post...', results);
        res.send(`Post id: ${req.params.id} retrieved`);
    })
})


//Delete post 
app.delete('/posts/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, results) => {
        if(err) throw results;
        console.log('Post Deleted', results);
        res.send('Post Deleted...');
    })
})


app.listen('3000', () => {
    console.log('Server started on port 3000')
})