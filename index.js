import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
app.use(bodyParser.json());

app.use('/users',usersRoutes);
const PORT = 5000;
app.get('/',(req,res) =>res.send('hello from homepage.'));
app.use(bodyParser.json());
app.listen(PORT,() => console.log(`Server running on port:http://localhost:${PORT}`));