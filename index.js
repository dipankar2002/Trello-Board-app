import express from 'express';
import { title } from 'node:process';
import { describe } from 'node:test';

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
}, {
    id: 2,
    title: 'Fix login bug',
    boardId: 1,
}];


let app = express();












app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
