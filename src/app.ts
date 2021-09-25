// Módulos necessários para aplicação
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import mongoose from 'mongoose';


//Importar módulos das rotas
import indexRouter from './routers/indexRouter'
// const clienteRouter = require('./routers/cliente/clienteRouter')
// const usuarioRouter = require('./routers/usuarioRouter')



// Conectar o banco de dados
mongoose.Promise = global.Promise
const OPTIONS: object = {useNewUrlParser: true, useUnifiedTopology: true}
const pathBD = 'mongodb+srv://alessandra_souza:alessandra_souza@cluster0.xzbqt.mongodb.net/soulBank?retryWrites=true&w=majority'

mongoose.connect(pathBD, OPTIONS, () => {
    console.log('banco conectado!')
    
})


//Configurar Express
const app = express()

app.set("view engine", "ejs")
app.set("views", __dirname + "\\views")
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieParser());
app.use(session({
    secret: 'secret123',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());




//Rotas
app.use('/', indexRouter)
// app.use('/', clienteRouter)
// app.use('/', usuarioRouter)



//Iniciando a porta de escuta
const PORT = 3000
app.listen(PORT, () => {
    console.log("Servidor rodando na porta "+ PORT)
})