import { Router } from 'express';
const router = Router()

router.post('/', (req, res) => {
    res.send('User registered');
});

export default router