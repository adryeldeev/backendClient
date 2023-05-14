import mysql  from 'mysql'



const conexao = mysql.createConnection({
    host:"us-cdbr-east-06.cleardb.net",
    port: "3306",
    user:"b30bf6cd95c4eb",
    password:"69f7fa5a",
    database:"heroku_57ca30aa0660a0d"
})


export const consulta = (sql, valores='',  mensagemReject)=>{
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (err, result) => {
            if (err)
            return reject(mensagemReject);
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row);
        })
    })
    
    
}

conexao.connect()

export default conexao;