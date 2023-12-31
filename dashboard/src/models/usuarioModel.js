var database = require("../../../database/db.js")

function cadastrar(nome, email, senha, fkempresa) {

    var instrucao = `
        INSERT INTO usuario (email,senha, nome, nivelAcesso, fkEmpresa) VALUES ('${email}', '${senha}', '${nome}', 0, '${fkempresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function achaIdUsuario(email, senha, fkEmpresa){
    var instrucao = `select idUsuario from usuario where email = '${email}'and senha= '${senha}'and fkEmpresa=${fkEmpresa}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function listarModel(fkEmpresa){
    var instrucao = `
        select * from empresa join usuario on fkEmpresa = idEmpresa where nivelAcesso = 0 and fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarUsuarioModel(idUser, nome, email, senha) {
    console.log("Parâmetros recebidos no model:", idUser, nome, email, senha);

    var instrucao = `
        update usuario set nome = '${nome}', email = '${email}', senha = '${senha}' where idUsuario = ${idUser};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}


function excluirUsuarioModel(idUser){
    var instrucao = `delete from usuario where idUsuario = ${idUser}`;
    console.log('Executando a instrução SQL: \n" + instrucao')
    return database.executar(instrucao);

}

function listarMaquinasModel(fkEmpresa){
    var instrucao = `
        select * from maquina where fkEmpresa = ${fkEmpresa};
    `;
    console.log('Executando a instrução SQL: \n" + instrucao')
    return database.executar(instrucao);
}

module.exports = {
    cadastrar, listarModel, editarUsuarioModel,
    excluirUsuarioModel, achaIdUsuario, 
    listarMaquinasModel
}
