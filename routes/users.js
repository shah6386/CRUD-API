import express from 'express';

import { createUser,getUsers,getUser,deleteUser,UpdateUser } from '../controllers/users.js';

const router = express.Router();


router.get('/', getUsers);

router.post('/', createUser);


router.get('/:id',getUser);
router.delete('/:id',deleteUser);

router.patch('/:id',UpdateUser);

export default router; 