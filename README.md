# Aula 05 — CRUD de Alunos

Atividade de CRUD desenvolvida com React, Node.js, Express e MySQL.

## Alterações realizadas

- Correção da conexão entre o front-end e o servidor.
- Implementação do cadastro e da listagem de alunos.
- Adição das funções de editar e excluir.
- Atualização da lista após editar ou excluir um aluno.
- Configuração do CORS e das rotas da API.

## Como executar

Primeiro, inicie o servidor:

```bash
cd servidor
npm install
npm start
```

Depois, em outro terminal, inicie o React:

```bash
cd client
npm install
npm start
```

O front-end será aberto em `http://localhost:3000` e o servidor usará a porta `3001`.

## Banco de dados

O projeto utiliza o banco MySQL `crudealunos` e uma tabela `alunos` com os campos `id`, `nome` e `idade`.
