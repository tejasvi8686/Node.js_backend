import  { Router } from "express";
import {  register } from "../controllers/user.controller.js"

const router = Router("register").post(registerUser)


export default router 

