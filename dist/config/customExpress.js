"use strict";
// Módulos necessários para aplicação
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
//Importar módulos das rotas
// const adminRouter = require('../routers/admin/adminRouter')
// const clienteRouter = require('../routers/cliente/clienteRouter')
// const usuarioRouter = require('../routers/usuarioRouter')
module.exports = () => {
    //Configurar Express
    const app = express();
    app.set("view engine", "ejs");
    app.set("views", __dirname + "\\..\\views");
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(session({
        secret: 'secret123',
        saveUninitialized: true,
        resave: true
    }));
    app.use(flash());
    //Rotas
    // app.use('/', adminRouter)
    // app.use('/', clienteRouter)
    // app.use('/', usuarioRouter)
    return app;
};
