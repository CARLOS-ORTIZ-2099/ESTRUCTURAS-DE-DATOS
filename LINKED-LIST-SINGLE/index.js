const colors = require('colors')
// listas enlazadas simples

/* cada elemento(nodo) esta formado por 2 partes un cuerpo con los datos a guardar 
   y una cabezeara(puntero) que hara referencia al siguiente nodo
   solo el ultimo node tendra su cabezera(puntero) referenciado a null ya que despues
   de este no habra nada mas.
   cabe reclacar que esta estructura solo tendra una conexion unidireccional donde 
   el nodo actual podra tener referencia al siguiente nodo de la lista, pero los 
   nodos de adelante no tendran acceso a sus nodos predecesores.
   La lista enlazada generalmente mantiene una referencia al primer nodo de
   la lista, llamado cabeza (head). Este es el punto de entrada a la lista.


*/

// diferencia entre listas y arreglos

// listas :
// no tienen indices
// conexion via nodos con un puntero al siguiente nodo
// el acceso aleatorio no esta permitido


// arreglos : 
// indexado en orden 
// la insersion y eliminacion puede ser costosa
// se puede acceder a un indice especifo rapidamente


// ventajas de las listas enlazadas : 


/* En general, teniendo una colección dinámica donde los elementos están    
   siendo añadidos y eliminados frecuentemente e importa la localización de
   los nuevos elementos introducidos se incrementa el beneficio de las listas
   enlazadas. 
   la ventaja de las listas enlazadas son cuando estamos añadiendo y eliminando elementos constantemente, ya que al no estar indexada no hay que hacer una reasignacion de memoria para los elementos 

*/

// desventajas de la lista enlazada
/* al no estar indexada la busqueda u obtencion de un determinado elemento
   se hace mas dificil, hay que hacer un recorrido mas trabajoso. 

*/


class Node {
   constructor(value, next){
      this.value = value
      this.next = next
   }
}

class LinkedList {
   constructor(){
      // hace referencia al primer nodo de la lista, inicialmente es null
      this.head  = null
   }
   // metodo para insertar
   insertNode(value) {
      const newNode = new Node(value, null);
      // si head es igual a null quiere decir que aun no hay nodos en la lista
      // y estableceremos esta instancia como el primer nodo
      if(this.head === null) {
         this.head = newNode
         return
      }
      // si llegamos a este punto quiere decir que tenemos por lo menos 1 o mas nodos en la lista
      // asignamos a la variable current el valor de la propiedad head(referencia al primer nodo)
      let current = this.head
      // ejecutamos un bucle siempre y cuando el nodo tenga un puntero que referencie a otro nodo
      // inicialmente nuestro ndodo apuntara a null entonces el bucle no se ejecuta
      while( current.next ) {
         // cuando tengamos por los menos 2 nodos es que haremos lo siguiente y es
         // asignarle a la variable como valor ya no el nodo incial si no asignarle el puntero que referencia al siguiente nodo y asi hasta encontrar el ultimo
         current = current.next
      }
      // cuando insertemos un segundo nodo y posteriores  current(que hace referencia al primer nodo) en su propiedad next le asignaremos la nueva instancia
      current.next = newNode

   }
   
   // metodo para visualizar un nodo
   display() {
      // esta variable obtendra el valor del primer nodo
      let current = this.head
      //console.log(current, 'result'.bgBlue);
      while(current) {
         console.log(current.value);
         // vamos cambiando el valor de la variable con su propiedad next(puntero que apunta al nodo siguiente)
         current = current.next
      }
   }

   // metodo para obtener o buscar un nodo especifico
   findNode(value) {
      // al buscar siempre debemos empezar por el head que apunta al primer
      // siempre sera asi ya que no podemos acceder directamente a un elemento 
      // como en un arreglo u objeto
      let current = this.head;
      while(current) {
         if(current.value === value){
            return current
         }
         // asignamos a la variable current el puntero que apunta al siguiente nodo esto con el fin de seguir buscando el valor indicado
         current = current.next
      }
      return null
   }

   // metodo para eliminar nodos

   deleteNode(value) {
      // aqui verificamos si el nodo a eliminar es el primero de nuestra lista
      // si es asi cambiamos el valor del encabezado al siguiente nodo o null si no hay un siguiente nodo
      if(this.head.value === value) {
         this.head = this.head.next
         return
      }
      // si el primer nodo no es el que quiero eliminar hacemos lo siguiente : 
      let current = this.head
      // comprobamos si hay mas nodos despues del primero
      while(current.next) {
         // si es asi preguntamos si el valor de su siguiente nodo es igual al value que se quiere elimnar
         // si es asi cambiamos el puntero del nodo anterior al nodo siguiente del nodo que se quiere eliminar 
         if(current.next.value === value){
            current.next = current.next.next
            return
         }
         // si no se sumple sigo cambiando el valor de la varaible current al nodo siguiemte hasta encontrar el nodo a eliminar
         current = current.next
      }

   }

   // insertar un nod al inicio
   prepend(value) {
      const newNode = new Node(value, null)
     
      newNode.next = this.head
      this.head = newNode
   }

   // revertir la lista
   reverse() {
      let prev = null;
      let current = this.head;
      let next = null;

      while (current) {
         next = current.next;
         current.next = prev;
         prev = current;
         current = next;
      }
      this.head = prev;
   }

   // Eliminar un Nodo en una Posición Específica
   removeAt(position) {
      if (position < 0) {
          return;
      }

      // aqui corroboramos que halla por lo menos un nodo y que la poscion a eliminar sea 0
      // si se cumple eliminamos el primer nodo y asignamos como nueva cabeza el siguiente nodo
      if (position === 0 && this.head) {
          this.head = this.head.next;
          return;
      }
      // caso contrario hacemos lo siguiente
      let current = this.head;
      let previous = null;
      let index = 0;

      // aqui hacemos un buble con el fin de recorrer todos los nodos de la lista
      // e incrementamos la variable index que incrementara conforme vallamos avanzando, esto con el fin de iterar hasta recorrer el nodo a eliminar
      // por cada iteracion cambiamos el valor de current con el nodo siguiente
      while (current && index < position) {
          previous = current;
          current = current.next;
          index++;
      }
      // al final si current es thruty  cambiamos la referencia del puntero del elemento anterior al nodo a eliminar con el nodo siguiente al nodo a eliminar(o null si no mas nodos)
      if (current) {
          previous.next = current.next;
      }
   }

   // Obtener el Tamaño de la Lista
   size() {
      let count = 0;
      let current = this.head;

      while (current) {
          count++;
          current = current.next;
      }

      return count;
  }

}

const linkedList = new LinkedList()

linkedList.insertNode('1')
linkedList.insertNode('2')
linkedList.insertNode('3')

/* linkedList.prepend('55')
linkedList.deleteNode('2')
console.log(linkedList.display());
console.log(linkedList.findNode('2')); 
*/
/* console.log(linkedList.display())
linkedList.reverse()
console.log(linkedList.display()); */

console.log(linkedList.display())

