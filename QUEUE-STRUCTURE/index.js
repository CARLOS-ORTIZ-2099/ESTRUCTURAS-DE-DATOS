// queue


(() => {
    /* las colas son similares a las pilas, la diferencia radica en que este
    cumple con la filosofia fifo (primero en entrar es el primero en salir) 
    es decir el elemento mas antiguo en la estructura sera el que salga
    primero 
    */

    class Queue {
        constructor(){
            this.oldIndex = 0;
            this.newIndex = 0;
            this.storage = {}
        }
    
        // el tamaño de la cola sera la diferencia entre el nuevo indice - indice mas antiguo
        size() {
            return this.newIndex - this.oldIndex
        }
    
        // creamos una nueva propiedad en el objeto y aumentamos el nuevo indice
        enqueue(data) {
            this.storage[this.newIndex] = data;
            this.newIndex++
        }
        
        // si es la cola esta vacia retornamos null
        dequeue() {
            if(this.oldIndex == this.newIndex) {
                return null;
            }
            let deleteData = this.storage[this.oldIndex];
            // eliminamos dicha propiedad del objeto
            delete this.storage[this.oldIndex];
            // aumentamos el olIndex
            this.oldIndex++
            return deleteData;
        }
    
    }
    
    let newQueue = new Queue()
    
    newQueue.enqueue(1)
    newQueue.enqueue(2)
    /* newQueue.dequeue()
    newQueue.enqueue(3)
    newQueue.dequeue() */
    console.log(newQueue.size());
    console.log(newQueue);

})();






