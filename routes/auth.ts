import { Router } from "express";
import { login, testEndpoint } from "../controllers/auth";
const authRoutes = Router();

authRoutes.post('/login', login);
authRoutes.get('/login', testEndpoint);
export default authRoutes;
