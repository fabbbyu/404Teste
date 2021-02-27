const express = require('express')
const path = require('path')

/*************************************APP BASE CONFIGS***********************************************/
const app = express()

const publicDirectory = path.join(__dirname, './public')//define o diretorio public para css, js e outras coisas estáticas
app.use(express.static(publicDirectory))

app.use(express.urlencoded({extended: false}))//serve para poder pegar dados dos forms
app.use(express.json())//serve para que os dados enviados de um form sejam no formato JSON 
app.set('view-engine', 'hbs')

/*************************************APP BASE CONFIGS***********************************************/

/*************************************ROTAS***********************************************/

app.listen(3001, () => {
    console.log('Server running on port 3001')
})

app.use('/', require('./routes/pages'))

/*************************************ROTAS***********************************************/