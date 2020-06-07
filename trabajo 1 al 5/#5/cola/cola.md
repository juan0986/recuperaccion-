Una cola (queue en inglés) es una estructura de datos compuesta por una serie de elementos donde insertamos data al final de la serie, 
y retiramos data por el frente. Es lo que llamamos una estructura FIFO (First In, First Out). Usamos colas para varias cosas, 
ordenar operaciones, la cola de impresión, y el clásico ejemplo de una cola en la ventanilla de un banco.

En principio las colas o queues tienen dos métodos importantes:
enqueue : Traducido como “encolar”, es el método que debe agregar un elemento a la cola.
dequeue : Traducido como “desencolar” (Nota: suena mal, no lo digas así, no, no lo pienses). Este método retira el primer elemento de la cola.
exiates mas metodos auxiliares pero esos son los que mas se usan.

El código tiene una implementación como la que sigue: 

function Queue() {

    this.dataStore = Array.prototype.slice.call(arguments, 0);
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.empty = empty;

    this.print = print;

    function enqueue(element) {
        this.dataStore.push(element);
    }

    function dequeue() {
        return this.dataStore.shift();
    }

    function empty() {
        return this.dataStore = [];
    }

    function print(element) {
        this.dataStore.forEach(function (item) {
            // element.appendChild(item.node);
            console.log(item);
        });
    }
}

