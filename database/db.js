var mysql = require("mysql2");
// var sql = require('mssql');

// CONEXÃO DO MYSQL WORKBENCH
var mySqlConfig = {
    host: "localhost",
    database: "termotech",
    user: "aluno",
    password: "sptech",
};

function executar(instrucao) {
    return new Promise(function (resolve, reject) {
        var conexao = mysql.createConnection({
            host: "10.18.32.223", //10.18.36.79 // 10.18.32.223
            database: "termotech",
            user: "aluno",
            password: "sptech",
        })
        conexao.connect();
        conexao.query(instrucao, function (erro, resultados) {
            conexao.end();
            if (erro) {
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });
        conexao.on('error', function (erro) {
            return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
        });
    }
    )
}

module.exports = {
    executar
}


// // CONEXÃO DO SQL SERVER - AZURE (NUVEM)
// var sqlServerConfig = {
//     server: "localhost",
//     database: "SEU_BANCO_DE_DADOS",
//     user: "SEU_USUARIO",
//     password: "SUA_SENHA"
// }

// function executar(instrucao) {
//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         return new Promise(function (resolve, reject) {
//             sql.connect(sqlServerConfig).then(function () {
//                 return sql.query(instrucao);
//             }).then(function (resultados) {
//                 console.log(resultados);
//                 resolve(resultados.recordset);
//             }).catch(function (erro) {
//                 reject(erro);
//                 console.log('ERRO: ', erro);
//             });
//             sql.on('error', function (erro) {
//                 return ("ERRO NO SQL SERVER (Azure): ", erro);
//             });
//         });
//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         return new Promise(function (resolve, reject) {
//             var conexao = mysql.createConnection(mySqlConfig);
//             conexao.connect();
//             conexao.query(instrucao, function (erro, resultados) {
//                 conexao.end();
//                 if (erro) {
//                     reject(erro);
//                 }
//                 console.log(resultados);
//                 resolve(resultados);
//             });
//             conexao.on('error', function (erro) {
//                 return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
//             });
//         });
//     } else {
//         return new Promise(function (resolve, reject) {
//             console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//             reject("AMBIENTE NÃO CONFIGURADO EM app.js")
//         });
//     }
// }