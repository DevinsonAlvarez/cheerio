import isoCodes from './app.js';
import express from 'express';

const app = express()
let iso;

isoCodes().then((res) => iso = res);

app.get('/', (req, res) => res.json(iso));

app.listen(2200);
console.log('Server on port', 2200);
