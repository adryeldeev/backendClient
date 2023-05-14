import mysql  from 'mysql'



const conexao = mysql.createConnection({
    host:"sql10.freemysqlhosting.net",
    port: "3306",
    user:"sql10617661",
    password:"44IEuyB4Ll",
    database:"sql10617661"
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