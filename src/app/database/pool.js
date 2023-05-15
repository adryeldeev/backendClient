import mysql  from 'mysql'



const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b30bf6cd95c4eb',
    password: '69f7fa5a',
    database: 'heroku_57ca30aa0660a0d',
    port: '3306'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }

    console.log('Conexão bem sucedida. ID da conexão: ' + connection.threadId);

    connection.release();
});

export const consulta = (sql, valores='',  mensagemReject)=>{
    return new Promise((resolve, reject) => {
        pool.query(sql, valores, (err, result) => {
            if (err)
            return reject(mensagemReject);
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row);
        })
    })
    
    
}



export default pool;