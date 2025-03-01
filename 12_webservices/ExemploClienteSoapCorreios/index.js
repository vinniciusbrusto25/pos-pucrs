const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  //No exercicio o professor consultou o CEP, porem hoje este servico exige autenticacao
  client.buscaDataAtual((err, result) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(result.return);
  });
});
