const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }

    const args = { intA: 2, intB: 3 };

    client.Add(args, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    });

    client.Subtract(args, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    });

    client.Multiply(args, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    });

    client.Divide({intA: 20, intB: 2}, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    });
});