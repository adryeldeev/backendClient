import { consulta } from "../database/conexao.js";

 class ClientRepository{

    create(values) {
        const sql = "INSERT INTO heroku_57ca30aa0660a0d.newclient (name, email, numero) VALUES(?, ?, ?)";
        return consulta(sql, values, 'Não foi possível cadastrar!')
    }


    findAll() {
        const sql = "SELECT * FROM heroku_57ca30aa0660a0d.newclient;";
        return consulta(sql, 'Não foi possível localizar !')
    }


    findById(id) {
        const sql = "SELECT * FROM heroku_57ca30aa0660a0d.newclient WHERE ID = ?";
        return consulta(sql, id, 'Não foi possível localizar!')
    }
    update(id, name, email, numero) {
        const sql = "UPDATE heroku_57ca30aa0660a0d.newclient SET `name`=?, `email`=?, `numero`=? WHERE ID = ?";
        const valores = [name, email, numero, id];
        return consulta(sql, valores, 'Não foi possível atualizar!')
      }
    delete(id) {
        const sql = "DELETE FROM heroku_57ca30aa0660a0d.newclient WHERE ID=?"

        return consulta(sql, id, 'Não foi possível deletar!')
    }
}


export default new ClientRepository;