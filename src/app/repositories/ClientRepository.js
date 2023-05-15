import { consulta } from "../database/pool.js";

 class ClientRepository{

    create(values) {
        const sql =
          "INSERT INTO heroku_57ca30aa0660a0d.newclient (name, email, numero) VALUES (?, ?, ?)";
        return conexao
          .promise()
          .query(sql, values)
          .then((result) => result[0].insertId)
          .catch((err) => {
            console.error("Erro ao criar cliente:", err);
            throw new Error("Não foi possível cadastrar o cliente.");
          });
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