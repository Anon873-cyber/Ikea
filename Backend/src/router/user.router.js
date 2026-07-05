import {Router} from 'express'; 
import { registerUser, loginUser } from '../controller/user.controller.js';
import {verifyJWT} from '../middleware/auth.middleware.js'
const router = Router()
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

// router.post('/logout');
// router.get('/profile');

export default router;