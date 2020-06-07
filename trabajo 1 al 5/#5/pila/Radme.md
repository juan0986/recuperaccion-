/*En informática, una pila es una estructura de datos lineal. Si esta afirmación tiene un valor marginal para ti, como originalmente lo hizo conmigo, considera esta alternativa: una pila organiza los datos en orden secuencial.
Para proporcionar un ejemplo más técnico de una pila, recordemos la operación 'deshacer' de un editor de texto. Cada vez que se agrega texto a un editor de texto, este se inserta en una pila.
 La primera adición al editor de texto representa la parte inferior de la pila;
 el cambio más reciente representa la parte superior de la pila. Si un usuario quiere deshacer el cambio más reciente, se elimina la parte superior de la pila. 
 Este proceso puede repetirse hasta que no haya más adiciones a la pila, que es un archivo en blanco.

Como ahora tenemos un modelo conceptual de una pila, vamos a definir las dos operaciones de una pila:
•	push(data) agrega datos.
•	pop() elimina los datos agregados más recientemente.
Para nuestra implementación, crearemos un constructor llamado Stack. Cada instancia de Stack tendrá dos propiedades: _size y _storage.
function Stack() {
    this._size = 0;
    this._storage = {};
}
Los métodos para agregar o eliminar datos de la estructura es : 
Para agregar utilizamos push(data). (Este método se puede compartir entre todas las instancias de Stack,
     así que lo agregaremos al prototipo de Stack).*/
    
    ejemplo de la estructura
    
     var node = function()
     {
         var data;
         var next = null;
     }
      
     var stack = function()
     {
         this.top = null;
      
         this.push = function(data) {
             if (this.top == null) {
                 this.top = new node();
                 this.top.data = data;
             } else {
                 var temp = new node();
                 temp.data = data;
                 temp.next = this.top;
                 this.top = temp;
             }
         }
      
         this.pop = function() {
             var temp = this.top;
             var data = this.top.data;
             this.top = this.top.next;
             temp = null;
             return data;
         }
      
         this.print = function() {
             var node = this.top;
             while (node != null) {
                 console.log(node.data);
                 node = node.next;
             }
         }
     }
      
     var s = new stack();
      
     s.push(1);
     s.push(2);
     s.push(3);
      
     s.print();
      
     var a = s.pop();
      
     s.print();