import Router from "@koa/router";

import AuthController from './controller/auth'
import userController from './controller/user'

// const router = new Router();
const unprotectedRouter = new Router();
const protectedRouter = new Router();


// auth 相关路由
unprotectedRouter.post('/auth/login', AuthController.login)
unprotectedRouter.post('/auth/register', AuthController.register)

// users 相关路由
protectedRouter.get('/users', userController.listUsers)
protectedRouter.get('/users/:id', userController.showUserDetail)
protectedRouter.put('/users/:id', userController.updateUser)
protectedRouter.delete('/users/:id', userController.deleteUser)

export {unprotectedRouter, protectedRouter};
