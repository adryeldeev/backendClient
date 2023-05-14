import { Router } from 'express'
import ClientController from './app/controllers/ClientController.js';

const router = Router()


router.get('/', ClientController.index);
router.post('/cliente', ClientController.store);
router.get('/ler/:id',ClientController.show);
router.put('/edit/:id', ClientController.update)
router.delete('/delete/:id', ClientController.delete)


export default router