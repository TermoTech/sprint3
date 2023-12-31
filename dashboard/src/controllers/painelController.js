var painelModels = require("../models/painelModels");

function exibeConfigsMaquina(req, res){
  var idEmpresa = req.body.fkEmpresaServer
  var idUser = req.body.idServer
  painelModels.listarTodasMaquinasModel(idEmpresa)
      .then(
          function(resultado){
              res.json(resultado);
          }
      ).catch(
          function (erro) {
              console.log(erro);
              console.log(
                  "\nHouve um erro ao listar os usuários! Erro: ",
                  erro.sqlMessage
              );
              res.status(500).json(erro.sqlMessage);
          }
      )
}

function tempoReal(req,res) {
    var maquina = req.body.maquinaServer;
    var fkEmpresa = req.body.fkEmpresaServer;
    

    painelModels.tempoReal(maquina, fkEmpresa).then((resultado) => {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).json([]);
        }
      }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });

   
}

function listarUmaMaquina(req,res) {
  var idDaMaquina = req.body.idMaquina;
  
  painelModels.listarUmaMaquina(idDaMaquina).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });

 
}



module.exports = {
  tempoReal,
  exibeConfigsMaquina,
  listarUmaMaquina
}