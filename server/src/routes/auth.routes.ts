import { Router } from 'express';

import { createUser } from '../controllers/auth.controller';

const authRoutes = Router();

authRoutes.post('/create', createUser);

export default authRoutes;
