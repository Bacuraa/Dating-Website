import { Router } from 'express';
import { addUser } from '../controllers/usersController.js';
const router = Router()

router.post('/', addUser);

export default router