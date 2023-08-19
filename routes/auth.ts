import { Router } from "express";
import { login, testEndpoint } from "../controllers/auth";
const authRoutes = Router();

authRoutes.post('/login', login);
export default authRoutes;
