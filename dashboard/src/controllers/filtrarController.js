var filtrarModel = require("../models/filtrarModel");

function filtrarGeral(req, res) {
  var diaInicial = req.body.inicialDia;
  var diaFinal = req.body.finalDia;

  filtrarModel
    .filtrarGeral(diaInicial, diaFinal)
    .then(function(resposta){
      res.status(200).json(resposta);
      res.json({
        horario: resposta[0].horario,
        parteProcesso: resposta[0].parteProcesso,
        temperatura: resposta[0].temperatura,
        fkMaquina: resposta[0].fkMaquina,
    })
    })
    .catch(function(erro){
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  filtrarGeral,
};
