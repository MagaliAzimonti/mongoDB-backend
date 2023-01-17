// Importar dependencias
import ClientSQL from "./sql.js";
import { options } from './options/SQLite3.js';

//Conexiones
const sql = new ClientSQL(options)

//Funcionalidades del proyecto
try {
    await sql.crearTabla()
    console.log('Tabla creada con exito')
    const articulosParaInsertar = [
        {nombre: "Remera", codigo: 'AB-12', precio: 2000, stock: 60},
        {nombre: "Zapatillas", codigo: 'AB-13', precio: 8000, stock: 80},
        {nombre: "Pantalon", codigo: 'AB-14', precio: 4000, stock: 90},
        {nombre: "Piluso", codigo: 'AB-15', precio: 1500, stock: 30},
        {nombre: "Campera", codigo: 'AB-16', precio: 4000, stock: 50},
    ]
    await sql.insertarArticulos(articulosParaInsertar)
    console.log('Articulos insertados con exito');

    //Punto 3
    const articulosLeidos = await sql.listarArticulos()
    console.log('3) articulos listado')
    console.table(articulosLeidos)

    //Punto 4
    await sql.borrarArticulosPorId(3)
    console.log('4) articulo borrado')

    //Punto 5
    await sql.actualizrStockPorId(0, 2)
    console.log('5) stock actualizado')

    const articuloFinal = await sql.listarArticulos()
    console.log('Resultado')
    console.table(articuloFinal)

} catch(error) {
    console.log(error)
} finally {
    sql.close()
}