import express from 'express'
import {controller} from '../controllers/controladores.js'
export const router = express.Router()

//Rutas de la red social

router.get('/', controller['home'])