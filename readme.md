# Criando um CRUD com NodeJS e Express

- **C**reate (POST)
- **R**ead (GET)
- **U**pdate (PUT)
- **D**elete (DELETE)

## Requisitos

- Node e npm
- VsCode

## Vamos fazer as configurações iniciais do projeto

1. Crie uma pasta com o nome "crud"
2. Acesse a pasta no seu VsCode
3. Abra seu terminal integrado ao VsCode
4. Inicialize o projeto com o seguinte comando:

```bash
npm init -y
```

Você vai perceber que um arquivo chamado package.json será criado. Este arquivo é responsável por armazenar todas as bibliotecas/libs que vamos usar no projeto, além de scripts para a execução do projeto.

4. Crie uma pasta chamada "src" e um arquivo chamado "index.js". A estrutura deve ficar assim: **crud/src/index.js**
5. Baixe a biblioteca **nodemon**, que será responsável por executar o projeto e observar suas modificações:

```bash
npm install nodemon
```

Perceba que agora um novo arquivo chamado **package-lock.json** foi criado. Este arquivo lista as bibliotecas que já foram baixadas neste projeto, bem como as dependências dessas bibliotecas. Além disso, foi criada uma pasta chamada "node_modules" que armazena todas as bibliotecas utilizadas neste projeto. Caso deseje reinstalar as bibliotecas, você pode excluir a pasta "node_modules" e o arquivo "package-lock.json" e, em seguida, executar o comando **npm install** no seu terminal.

6. Crie um script chamado **dev** dentro do "package.json" com o seguinte comando:

```bash
"scripts": {
  "dev": "nodemon src/index.js"
}
```

Perceba que o script de test foi apagado e ficou somente o que vamos usar para este projeto.

7. Adicione no arquivo "src/index.js" o seguinte código:

```js
console.log("Olá, Mundo!");
```

8. Execute o projeto com o seguinte comando:

```bash
npm run dev
```

Perceba que o **dev** que estamos usando é o **script** que criamos no **package.json**

9. Para parar a execução do projeto, utilize o seguinte comando:

```bash
ctrl + c #ou
command + C
```

10. Antes de fazer o upload para o GitHub, é importante criar um arquivo chamado ".gitignore" contendo as entradas para a pasta "node_modules" e o arquivo "package-lock.json".

## Nesse momento você acabou de executar seu primeiro projeto!! Parabéns!!! Agora você já pode começar configurar seus arquivos, criar suas rotas, controladores e intermediadores
