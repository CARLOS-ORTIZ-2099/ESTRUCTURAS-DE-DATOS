//const colors = require('colors')

console.log('lista enlazada doble'.magenta);


/* muy similar a una lista enlazada simple, aqui tendremos 2 partes
   la primera sera nuestra la clase Node, este se encargara de crear 
   al nodo, pero esta vez constara de 3 partes, un valor que sera el 
   tipo de dato que almacenara el nodo, un puntero al nodo anterior 
   y un puntero al nodo siguiente, excepto los el primer nodo que no 
   tendra un nodo anterior y el ultimo nodo que no tendra un nodo siguiente 

*/

class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}


/* de igual manera tenemos una clase LinkedListDouble, que se encargara de
   gesionar la lista, como sus operaciones de insertar, eliminar, recorrer
   etc.  
   a diferencia de las listas simples que son unidireccionales, las listas
   dobles son de doble via es decir se puede recorrer tanto desde el principio
   como desde el final, por eso es que la la estructura tendra 2 punteros 
   que apunten al principio como al final de la lista, a diferencia de la lista simple que solo tenemos un head que apunta al primer nodo y desde ahi
   accedemos a los demas elementos de la lista. 
*/

class LinkedListDouble {
    #private =  1
    constructor() {
        this.head = null
        this.tail = null
    }
    /* cuando insertamos un nodo debemos modificar tanto los punteros prev y/o siguiente de los nodos, como actualizar la cabeza y la cola(que apuntan al primer y ultimo nodo de la lista)  */

    append(value) {
        const newNode = new Node(value)
        // nos sersionamos que no halla ni un nodo en la lista aun
        if(!this.head) {
            // si se cumple hacemos ese nodo nuestra cabezera y tambien la cola
            this.head = newNode
            this.tail = newNode
        }
        // caso contrario quiere decir que hay por lo menos un nodo en la lista
        else {
            // actualizamos la referencia al nodo previo del nuevo nodo creado con la cola de la lista (el ultimo nodo)
            newNode.prev = this.tail

            // actualizamos la referencia al nodo siguiente del ultimo nodo(cola  de la lista) con el nuevo nodo creado
            this.tail.next = newNode

            // actualizamos la cola con el nuevo nodo creado
            this.tail = newNode
               
        }
    }

    delete(value) {
        // primero evaluamos si hay por lo menos 1 nodo en la lista
        if(!this.head) return 'lista vacia'
        // caso contrario seguimos buscando un siguiente nodo
        let current = this.head
        while(current) {
            // por cada iteracion preguntamos si el nodo en cuestion es que coincide con el valor a eliminar
            if(current.value === value) {
                let deletenode = current
                // variables que referencien a los nodos izquierdo y derecho de la lista
                let left = deletenode.prev
                let right = deletenode.next
                // si el nodo izquierdo es null quiere decir que se intenta eliminar el primer nodo y haremos lo siguiente
                if(left === null) {
                    // actualizamos la cabeza
                    this.head = right
                    // preguntamos si right contiene un nodo si es asi actualizamos su propiedad prev a null
                    if(right){
                        right.prev = left
                    }else {
                         // Si `right` es null, significa que hemos eliminado el único nodo y también necesitamos actualizar `this.tail`
                         this.tail = null
                    }
                    return
                }
                // si el nodo derecho es null quiere decir que se intenta eliminar el ultimo nodo y haremos lo siguiente
                if(right === null) {
                    this.tail = left
                    left.next = right
                   
                    return
                }
                // si es un nodo de cualquier posicion entonces solo cambiamos lugares 
                left.next = right
                right.prev = left
                return
            }
            current = current.next
        }


    }

    find(value){
    
        let current = this.head
        while(current) {
            if(current.value === value) {
                return current
            }
            current = current.next
        }
        return null
    }

    size() {
        let count = 0
        let current = this.head
        
        while(current) {
            count++
            current = current.next
        }
        return count
    }

    deleteTail() {
        if(!this.tail) {
            return null
        }
        // si se cumple quiere decir que solo hay un nodo
        if(this.head === this.tail) {
            const deleteTail = this.tail
            this.head = null
            this.tail = null
            return deleteTail
        }
        // si llegamos hasta aqui quiere decir que hay muchos nodos antes de la cola
        const deleteTail = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        return deleteTail
    }
   
    deleteHead() {
        if(!this.head) {
            return null
        }
        const deleteHead = this.head
        if(this.head === this.tail) {
            this.head = null
            this.tail = null
           
        }else {
            this.head = this.head.next
            this.head.prev = null
        }
        return deleteHead
        
    }

    appendInAnyPlace(value, position) {
        
        if(position > this.size() || position < 0) {
            return 'invalid'
        }

        const newNode = new Node(value)
        // si se cumple quiere decir que se va a insertar en la primer posicion
        if(position === 0) {
            // verificamos si el head es null, si se cumple quiere decir que la lista aun esta vacia
            if(!this.head) {
                // establecemos ese nuevo y primer nodo como la cabeza y la cola de la lista
                this.head = newNode
                this.tail = newNode
            }else {
                // si no se cumple, quiere decir que hay por lo menos 1 nodo en la lista
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode

            }
        }
        else {
            // si no se cumple que la posicion es 0 entonces se va insertar en otra posicion
            let current = this.head 
            let count = 0

            while(current) {
                // en este punto sabemos que position no va ser 0, por que si fuera 0 caeria en la primera sentencia de arriba, entonces a qui se sobreentiende que position sera mayor que 0 
                if(count === position) {
                   console.log('entro');
                   let left = current.prev
                   let right = current

                   if(left) {
                    left.next = newNode
                    newNode.prev = left
                   }
                   
                   if(right) {
                     right.prev = newNode
                     newNode.next = right
                   }
                   break
                }         
                // caso contrario
                count++
                current = current.next
            }

            if(position === this.size()) {
                // si se cumple quiere decir que se quiere insertra al final
                this.tail.next = newNode
                newNode.prev = this.tail
                this.tail = newNode
            }

        }   
        return newNode

    }


}

const double = new LinkedListDouble()


double.append(1)
double.append(2)
double.append(3)
double.append(4)
// nuevo nodo x
double.append(5)



//console.log(double.delete(1));
//console.log(double.delete(3))
//console.log(double.find(5));
//console.log(double.deleteTail());


console.log(double.size());

console.log(double.appendInAnyPlace('x',5));
console.log(double);
