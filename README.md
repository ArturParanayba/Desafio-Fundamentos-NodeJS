# Desafio-Fundamentos-NodeJS
<p>Este código consiste em uma aplicação para que deve armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.</p>
Possui as seguintes rotas: 

`POST /transaction` : <p>A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saidas (retiradas).</p>
<p>Esta rota deve seguir o seguinte modelo:</p>

```
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

`GET /transaction` : <p>Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito</p>
<p>O retorno será da seguinte forma:</p>

```
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```
