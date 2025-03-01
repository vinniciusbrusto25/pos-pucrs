const soap = require('soap');
const url = 'http://localhost:8001/wscalc1?wsdl';

soap.createClient(url, function (err, client) {
    if (err) throw err;
    console.log(client.describe().ws.calc);
});