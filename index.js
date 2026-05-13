import express from 'express';
import jwt from 'jsonwebtoken';
const jwtSecret = 'attlasiationsuperswwfadsfsafasfwafwfecret123123';

const USER_ID = 1;

let USERS = [{
    id: 1,
    username: 'john_doe',
    password: 'password123'
}, {
    id: 2,
    username: 'jane_smith',
    password: 'password456'
}];

let ORGANIZATIONS = [{
    id: 1,
    title: '100xSchool',
    describetion: 'Learning platform for coding and technology education.',
    admin: 1,
    members: [2]
}, {
    id: 2,
    title: 'Non-Profit Organization',
    description: 'A non-profit organization focused on environmental conservation.',
    admin: 1,
    members: []
}];

let BOARDS = [{
    id: 1,
    title: '100xSchool website (frontend)',
    organizationId: 1,
}];
let ISSUES = [{
    id: 1,
    title: 'Add dark mode',
    boardId: 1,
    state: "IN_PROGRESS"
}, {
    id: 2,
    title: 'Fix login bug',
    boardId: 1,
    state: "DONE"
}];

let app = express();

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    
    if(!username || !password) 
        return res.json({ 
            error: 'Username and password are required' 
        });
    
    const existingUser = USERS.find(user => user.username === username);
    if(existingUser) 
        return res.json({
            message: "User with this username already exists"
        })
    
    const newUser = {
        id: USER_ID++,
        username,
        password 
    }
    USERS.push(newUser);
    return res.json({
        message: "You have signed up successfully"
    })
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        return res.json({
            error: 'Username and password are required'
        });
    }
    const user = USERS.find(user => user.username === username && user.password === password);
    if(!user) {
        return res.json({
            error: 'Invalid username or password'
        });
    }

    const token = jwt.sign({ userId: user.id, userName: user.username }, jwtSecret);

    return res.json({
        message: "You have logged in successfully",
        token
    });
});

app.post('/organization', (req, res) => {});

app.post('add-member-to-organization', (req, res) => {});


app.post('/boards', (req, res) => {});


app.post('/issues', (req, res) => {});

app.get('/organizations', (req, res) => {});
app.get('/boards', (req, res) => {});
app.get('/issues', (req, res) => {});
app.get('/members', (req, res) => {});
app.put('/issues', (req, res) => {});
app.delete('/members', (req, res) => {});










app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
