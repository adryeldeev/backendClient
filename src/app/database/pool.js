import mysql  from 'mysql'



const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'aws.connect.psdb.cloud',
    user: 'dr8yksjbov31fcdpoepu',
    password: 'pscale_pw_lizEQulVAk8Slb91TDCXGCSLlwd1zd5KMzsi1g6iObc',
    database: 'bd_mysql',
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