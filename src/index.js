const express = require('express');

const app = express();
app.use( express.json());

app.get('/concepts', (request, response) => {
    return response.json({
        'Concepts': {
            'ParamsTypes': {
                'QueryParams': 'Query Params são parametros que são inclusos na URL exemplo localhost:2222/?title=RouteParams, onde o servidor vai receber como parametro a variavel title.',
                'RouteParams': 'O Route Params são parametros normalmente usados na hora de identificar informações também são inclusos da URL, exemplo localhost:2222/rota1/23, onde 23 é nosso parametro.',
                'RequestBody': 'Request Body é um parametro que vai vir incluso no corpo da requisição como diz o nome, normalmente é um json que é enviado pelo front-end para o back-end.'
            },
            'Methods': {
            'GET': 'GET é um método HTTP que é usado para fazer requisições de informações do servidor.',
            'POST': 'POST é um método HTTP que usamos para enviar informações para o servidor.',
            'PUT/PATCH': 'PUT/PATCH é um método HTTP usado quando queremos alterar uma informação por completa ou apenas uma parte no servidor.',
            'DELETE': 'DELETE é um método que usamos quando queremos deletar alguma informação no servidor.'
            }
        }
    });
});

app.listen(3333, () => console.log("🎇 READY 🎆"));