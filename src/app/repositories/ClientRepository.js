import { consulta } from "../database/pool.js";

 class ClientRepository{

  create(values) {
    const sql = "INSERT INTO bd_mysql.Star(name, email, numero) VALUES(?, ?, ?)";
    return consulta(sql, values, 'Não foi possível cadastrar!')
}


    findAll() {
        const sql = "SELECT * FROM bd_mysql.Star;";
        return consulta(sql, 'Não foi possível localizar !')
    }


    findById(id) {
        const sql = "SELECT * FROM bd_mysql.Star WHERE ID = ?";
        return consulta(sql, id, 'Não foi possível localizar!')
    }
    update(id, name, email, numero) {
        const sql = "UPDATE bd_mysql.Star SET `name`=?, `email`=?, `numero`=? WHERE ID = ?";
        const valores = [name, email, numero, id];
        return consulta(sql, valores, 'Não foi possível atualizar!')
      }
    delete(id) {
        const sql = "DELETE FROM bd_mysql.Star WHERE ID=?"

        return consulta(sql, id, 'Não foi possível deletar!')
    }
}


export default new ClientRepository;