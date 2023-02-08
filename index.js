const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/salvar', (req, res) => {
  const dados = req.body;
  const dadosEmString = JSON.stringify(dados);

  fs.appendFile('dados.txt', dadosEmString + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao salvar dados');
      return;
    }

    res.send('Dados salvos com sucesso');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
