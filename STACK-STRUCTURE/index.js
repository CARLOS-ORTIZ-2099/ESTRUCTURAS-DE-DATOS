// stacks


(() => {

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

})();


(() => {

    /* la clase stack es la estructura gestora de nuestros elementos esta se compone de 2 propiedades, que son :
       - top o size que hace referencia a la cantidad de elementos que hay en el stack y gracias a el podemos 
       acceder al ultimo elemento de la estructura
       - la segunda propiedad sera la entidad que contenga los elementos
       podria ser un arreglo o un objeto 
    */
    class Stack {
        constructor() {
            this.size = 0; 
            this.content = {}
        }

        // metodo para insertar de ultimo el valor en el stack, cad que hagamos una insercion nuestro size incrementara
        push(data) {
            this.content[this.size] = data
            this.size++
        }

        // elimina el ultimo elemento del stack, asi mismo decrementa la variable size
        pop() {
            if(this.size < 1) {
                return 'invalid'
            }
            const targetDelete = this.content[this.size - 1]
            delete this.content[--this.size]
            return targetDelete
        }

        // metodo que retorna el ultimo elemento del stack
        getLastValue() {

            return this.size === 0 ? null  :  this.content[this.size - 1]
        }

        // retorna un booleano dependiendo si el stack esta vacio o no 
        isEmpty() {
            return this.size === 0
        }


    }

    
/*     const newstack = new Stack()
    newstack.push(1)
    newstack.push(2)
    newstack.push(3)
    console.log(newstack.pop());
    console.log(newstack.pop());
    console.log(newstack.pop());
    console.log(newstack.getLastValue());
    console.log(newstack.isEmpty());
    console.log(newstack); */


})();


(() => {
    // ejercicios con el stack

    
    class Stack {
        constructor() {
            this.size = 0; 
            this.content = {}
        }

        // metodo para insertar de ultimo el valor en el stack, cad que hagamos una insercion nuestro size incrementara
        push(data) {
            this.content[this.size] = data
            this.size++
        }

        // elimina el ultimo elemento del stack, asi mismo decrementa la variable size
        pop() {
            if(this.size < 1) {
                return 'invalid'
            }
            const targetDelete = this.content[this.size - 1]
            delete this.content[--this.size]
            return targetDelete
        }

        // metodo que retorna el ultimo elemento del stack
        getLastValue() {

            return this.size === 0 ? null  :  this.content[this.size - 1]
        }

        // retorna un booleano dependiendo si el stack esta vacio o no 
        isEmpty() {
            return this.size === 0
        }

        getContent() {
            return this.content
        }

        getAllValues() {
            let values = ''
            for(let n in this.content) {
                values+= `${this.content[(this.size - 1) - n]}`
            }
            return values
        }

        operation(sign) {
            let producto = sign === '*' || sign === '/' ? 1 : 0

            for(let n in this.content) {
                let temp = this.content[(this.size - 1) - n]
                switch(sign) {
                    case('+') : 
                        producto+=temp
                    break
                    case('-') : 
                        producto-=temp
                    break
                    case('*') : 
                        producto*=temp
                    break
                    case('/') : 
                        producto/=temp
                    break
                    default : 
                        return -1
                    
                   
                }
                
            }
            return producto
        }


    }

    /* convertir un numero base 10 a base 2 (binario) usando el stack
       Podemos resolver el problema usando un Stack, donde vamos a ir almacenando cada dígito
       de la descomposición, que va a ser el “resto” (módulo) que queda al dividir número por
       la base. Y así para cada dígito. Una vez completada la descomposición podemos construir
       el resultado simplemente sacando los elementos del stack en orden inverso a como se 
       añadieron (el último sale el primero), que es el comportamiento de un stack.
    
    */

    //const newstack = new Stack()
    function converterToBinary(num, base) {
        
        while( num > 0) {
            let mod = num % base
            newstack.push(mod)
            num = Math.floor(num / base)  
        }

        return newstack.getAllValues()
    }
    //console.log(converterToBinary(3, 2));
    

    /* corroborar si una palabra es palindromo */

    //const newStack =  new Stack()
    function isPalindrome(string) {
        console.log(string.toLowerCase());
        for(let i = 0; i < string.length; i++) {
            if(string[i] != ' ') {
                newStack.push(string[i])
            }
        }
       const reverse = newStack.getAllValues()
       console.log(reverse.toLowerCase());
       return reverse.toLowerCase() === string.toLowerCase().replace(/ /g, '')
    }

    //console.log(isPalindrome('Anita lava la tina'));
    //console.log(newStack);
    

    
    // factorial con los stacks
    const newStack = new Stack()
    function factorial(num) {
        while(num > 0) {
            newStack.push(num)
            num--
        }
        return newStack.operation('+')

    }

    console.log(factorial(5));
    console.log(newStack);


})()

