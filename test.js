const Contenedor= require('./contenedor')

const productos = new Contenedor();

productos.save({
    title: 'escuadra',
    price: '123.45',
    thumbnail:'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
})
productos.save({
    title: 'Calculadora',                                                                                                                              
    price: 234.56,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
})
productos.save({
    title: 'Globo Terráqueo',                                                                                                                          
    price: 345.67,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
})
//productos.getById(2)
//productos.getAll()
//productos.deleteById(1)
//productos.deleteAll()