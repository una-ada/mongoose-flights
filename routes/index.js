import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => res.redirect('/flights'));
export default router;
