const app = require("./app");

let server = app.listen(process.env.PORT || 3000, () => {

    let host = server.address().address  === '::' ? 'http://localhost' : server.address().address;
    let port = server.address().port;
    let envoriment = process.env.NODE_ENV === 'dev' ? 'Desenvolvimento' : 'Produção';

    console.log(`Servidor iniciado em: ${host}:${port} em ambiente de ${envoriment}`);
});
