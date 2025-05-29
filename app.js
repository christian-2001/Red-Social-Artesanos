//Imports
import express from 'express';
import {fileURLToPath} from 'url';
import path, {dirname} from 'path';
import {router} from './routes/rutas.js'

//Express
const app = express();
const PORT = process.env.port || 3000;

//Variables para rutas absolutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Configuraciones
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'vistas'))

//Middlewares
app.use('/', router)

//Middleware para que el servidor escuche peticiones en un puerto establecido
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})