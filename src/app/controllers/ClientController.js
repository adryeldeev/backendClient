
import ClientRepository from '../repositories/ClientRepository.js';



class ClientController {

async index  (req, res){
   const result = await ClientRepository.findAll()
   res.json(result)
}


async show (req, res){
    const id = req.params.id;
    const result = await ClientRepository.findById(id)
    res.json(result)
}


async store(req,res){
    const values = [
        req.body.name,
        req.body.email,
        req.body.numero
    ];
    const result = await ClientRepository.create(values)
    res.json(result)
}


async update(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const numero = req.body.numero;
    const result = await ClientRepository.update(id, name, email, numero);
    res.json(result);
  }


async delete(req, res){
    const id = req.params.id;
    const result = await ClientRepository.delete(id)
    res.json(result)
    }
}

// padrão Singleton
export default new ClientController()