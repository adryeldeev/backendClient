import { consulta } from "../database/conexao.js";

 class ClientRepository{

    create(values) {
        const sql = "INSERT INTO sql10617661.newclieent (name, email, numero) VALUES(?, ?, ?)";
        return consulta(sql, values, 'Não foi possível cadastrar!')
    }


    findAll() {
        const sql = "SELECT * FROM sql10617661.newclieent;";
        return consulta(sql, 'Não foi possível localizar !')
    }


    findById(id) {
        const sql = "SELECT * FROM sql10617661.newclieent WHERE ID = ?";
        return consulta(sql, id, 'Não foi possível localizar!')
    }
    update(id, name, email, numero) {
        const sql = "UPDATE sql10617661.newclieent SET `name`=?, `email`=?, `numero`=? WHERE ID = ?";
        const valores = [name, email, numero, id];
        return consulta(sql, valores, 'Não foi possível atualizar!')
      }
    delete(id) {
        const sql = "DELETE FROM sql10617661.newclieent WHERE ID=?"

        return consulta(sql, id, 'Não foi possível deletar!')
    }
}


export default new ClientRepository;