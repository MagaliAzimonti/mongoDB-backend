//Importar dependencas y librerias
const {options} = require('./options/mysql.js')
const knex = require('knex')(options)

// Creamos uan nueva tabla con la funcion createTable() del esquema knex.js
//y definimos el esquema para que contenga tres columnas: id, precio, nombre

knex.schema.createTable('cars', table => {
    table.increments('id')
    table.string('name')
    table.integer('price')
})

.then(() => console.log('Tabla creada con exito'))
.catch((err) => { console.log(err); throw err})
.finally(() => {
    knex.destroy();
})
