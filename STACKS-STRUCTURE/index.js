/*  un stack es una estructura de datos con la filosofia (lifo) last int, first out, 
    el ultimo en entrar es el primero en salir, en est estructura de dato solo tenemos
    acceso al ultimo elemento agregado, si queremos cualquier elemento que se encuentre
    entre las primeras posiciones tenemos que sacra los que se insertaron de ultimo para
    llegar a el, entre los metodos mas relevante de esta estructura estan : 
    - push : insertar en el ultimo lugar 
    - pop :  quitar el elemento del ultimo lugar
    - peek : obten el ultimo elemento del stack sin removerlo
    - size : obtener el tamaño de la pila
    - isempty : corrobora si la pila esta vacia

    
*/


// la clase pila que contendra todos nuestros elementos

class Stack {
    constructor() {
        this.size = 0;
        this.storage = {}
    }

    push(data) {
        // asignamos el nuevo elemento a nuestra estructura en la posicionde size
        this.storage[this.size] = data
        // Aumenta el tamaño de nuestro almacenamiento
        this.size++
    } 

    pop() {
        if(this.size == 0) {
            return null
        }
        // creamos una referencia al ultimo elemento de la pila
        let deleteData = this.storage[this.size - 1]
        // eliminamos del objeto aquella propiedad cuya clave sea igual al valor de la variable size(indica el ultimo elemento de la pila)
        delete this.storage[this.size - 1]
        // decrementamos size en 1
        this.size--

        return deleteData

    }

    peek() {
        return this.storage[this.size - 1] || null
    }

    length() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

}

const newStack = new Stack()
//console.log(newStack.pop());
console.log(newStack.push(1));
console.log(newStack.push(2));
console.log(newStack.push(3));
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.length());
console.log(newStack.peek());
console.log(newStack.isEmpty());

console.log(newStack);





