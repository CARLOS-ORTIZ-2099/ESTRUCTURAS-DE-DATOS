//const colors = require('colors')

console.log('linked list'.magenta);

// la linked list esta formada por 2 partes

/* la clase node que es la que forma o crea al nodo que alamacenara la lista
   esta se compone de 2 propiedades un cuerpo o value que guardara los datos 
   que tendra el nodo, y la otra propiedad que es el puntero que apunta al 
   siguiente nodo 

*/

class Node {
    constructor(value,){
        this.value = value,
        this.next = null
    }
}

/* const node1 =new Node(1)
   console.log(node1) 
*/

/* la clase linked list que se encarga de gestionar la lista, asi como sus operaciones
   de insercion, eliminacion, acceso, y demas.
   esta clase solo tendra una propiedad que sera el head(encabezado), este hara referencia
   al primer nodo de la lista, recordemos que una lista enlazada no es una estructura indexada
   por lo cual no dependemos de indices pero si de la cabeza o nodo primero para acceder al 
   resto   

*/

class LinkedList {
    constructor(){
        this.head = null
    }

    // insertar un nodo
    append(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode    
        }else {
            let currentNodo = this.head
            while(currentNodo.next) {
                currentNodo = currentNodo.next
            }
            currentNodo.next = newNode
            
        }
    }

    delete(value) {
        if(this.head.value == value) {
            this.head = this.head.next
            return
        }

        let currentNodo = this.head
        while(currentNodo.next) {
            // si el nodo actaul su valor es identico al que se debe eliminar hacemos algo
            if(currentNodo.next.value == value) {
                currentNodo.next = currentNodo.next.next
                return
            }
            currentNodo = currentNodo.next
        }

    }

    find(value) {
        let currentNode = this.head
        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return -1
    }

    display() {
        let currentNode = this.head
        while(currentNode) {
            console.log(currentNode);
            currentNode = currentNode.next
        }
    }

    size(){
        let count = 0
        let currentNode = this.head
        while(currentNode) {
            count++
            currentNode = currentNode.next
        }
        return count

    }

    appendInAnyPlace(value, position) {
        if(position > this.size() || position < 0) {
            return null
        }
        let current = this.head
        let previousNode = null
        let point = 0
        const newNode  = new Node(value)

        if(!this.head) {
            this.head = newNode
            return
        }

        while(current) {    
            if(point === position) {
                if(current === this.head) {
                    newNode.next = this.head
                    this.head = newNode
                    return 
                }
               
                newNode.next = current
                previousNode.next = newNode
                return
            }
            point++ // 1 // 2// 3 // 4
            previousNode = current // value1 // value2 // value3// value4
            current = current.next// value2 // value3 // value4 // null
        }
        //console.log(point, previousNode, current);
        // si llegamos a este punto quiere decir que iteramos hasta la posicion
        // del ultimo nodo y si se cumple la condicio  queire decir que el usuario
        // quiere insertar en la ultima posicion
        if(point === position) {
            previousNode.next = newNode
        }

    }

}
const linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(5)
//linked.append(0)
//linked.delete(2)
//console.log(linked.find(3));
//linked.display()
console.log(linked.size());
console.log(linked.appendInAnyPlace('x', 6));
console.log(linked);



