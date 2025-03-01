const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Desver o WSDL', client.describe().Calculator.CalculatorSoap);
});