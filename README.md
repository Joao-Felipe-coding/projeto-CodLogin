# Projeto CodLogin

Sistema simples de login e gerenciamento de usuários desenvolvido com HTML, CSS e JavaScript.

## Descrição

Este projeto implementa um sistema básico com duas funcionalidades principais:
1. Tela de login com autenticação simples
2. Tela de cadastro de usuários com funcionalidades CRUD (Criar, Ler, Atualizar, Deletar)

## Estrutura do Projeto

- `index.html`: Página de login do sistema
- `cadastro.html`: Página de gerenciamento de usuários (cadastro, visualização, edição e exclusão)
- `main.js`: Contém toda a lógica do sistema, incluindo funções de validação e manipulação dos dados
- `sign-in.css`: Folha de estilo para a página de login

## Funcionalidades

### Sistema de Login

O sistema implementa uma verificação básica de login:
- Validação de preenchimento dos campos de e-mail e senha
- Redirecionamento para a página de cadastro após autenticação

### Sistema de Cadastro (CRUD)

A página de cadastro permite:
- Adicionar novos usuários à lista
- Visualizar todos os usuários cadastrados em uma tabela
- Editar informações de usuários existentes
- Excluir usuários da lista

## Como Usar

1. Abra o arquivo `index.html` em seu navegador
2. Preencha os campos de e-mail e senha
3. Clique em "Entrar" para acessar o sistema
4. Na página de cadastro, você poderá:
   - Adicionar um novo usuário inserindo o nome e clicando em "Salvar"
   - Editar um usuário clicando no botão "Editar" correspondente
   - Excluir um usuário clicando no botão "Excluir" correspondente

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.5 (para estilização)

## Observações

Este é um projeto educacional e simplificado. Em um ambiente de produção, seria necessário implementar:
- Autenticação real com banco de dados
- Segurança para proteção de senha
- Validações mais robustas
- Persistência de dados