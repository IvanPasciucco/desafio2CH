const fs = require('fs');

class Contenedor {
    constructor(path) {
        this.path = path;
    };

    //save(Object): Number - Recibe un objeto, 
    //lo guarda en el archivo, devuelve el id asignado.

    save(element) {

        fs.promises.readFile(this.path, 'utf-8')
            .then(contents => {

                if (contents = []) {
                    element.id = 1
                    let array = []
                    array.push(element)
                    let arrayString = JSON.stringify(array, null, 2);

                    fs.promises.writeFile(this.path, 'utf-8', array)
                } else {

                    let contentsObject = JSON.parse(contents)
                    let size = contentsObject.length - 1
                    let lastId = contentsObject[size].id

                    element.id = lastId + 1
                    contentsObject.push(element)
                    contents = JSON.stringify[contentsObject, null, 2]

                    fs.promises.writeFile(this.path, contentsObject)
                        .then(() => {
                            console.log(`Se asigno el id ${item.id} al producto`);
                        })
                        .catch((error) => {
                            console.log('Ocurrio un error al  asignar id', error);

                        })

                }


            })
            .catch(err => {

            })


    }
    /*getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.*/
    getById(id) {
        fs.promises.readFile(this.path, 'utf-8')
            .then(contents => {

                let contentsObj = JSON.parse(contents);
                let validacion = false;

                for (let i = 0; i < contentsObj.length; i++) {
                    if (contentsObj[i].id == id) {
                        console.log(contentsObj[i]);
                        validacion = true;
                    }
                }

                if (validacion == false) {
                    console.log('El id ingresado no existe');
                }
            })
            .catch(error =>
                console.log('Ocurrio un error al  asignar id', error)
            )
    }

    //getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
    getAll() {
        fs.promises.readFile(this.path, 'utf-8')
            .then(contents => {
                let contentsObj = JSON.parse(contents)
                console.log(object);
            })
            .catch(error =>
                console.log(error)
            )

    }
    //deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
    deleteById(id) {
        fs.promises.readFile(this.path, 'utf-8')
            .then(contents => {
                let contentsObj = JSON.parse(contents)
                let validacion = true
                for (let i = 0; i < array.length; i++) {
                    if (contentsObj[i].id == id) {
                        contentsObj.splice(i)
                        validacion = true
                    }
                    else if (validacion == false) {
                        console.log('No existe el id ingresado');
                    }
                }
                
            })
    }
    deleteAll() {
        fs.promises.writeFile(this.path, [])
            .then(() => {
                console.log('Se eliminaron todos los productos');
            })
            .catch(error =>
                console.log(error))
    }
}

module.exports = Contenedor

   
