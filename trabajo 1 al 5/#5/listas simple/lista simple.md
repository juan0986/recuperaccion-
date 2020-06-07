Una lista simple o lista simplemente encadenada, son estructuras de datos muy parecidas a los array, donde el acceso al elemento o nodo,
 es a través de un puntero , a diferencia de un array donde este se accede a través de índices.

 Una lista está compuesta por nodos, donde cada uno se conecta con el nodo siguiente (salvo el último), 
 esto quiere decir que no puede ver para atrás o por quien fue enlazado.

Siempre se tiene como referencia el puntero o inicio de lista llamado head , este define el principio de la lista,
 sin este puntero de referencia no se podría acceder a la lista.

 Veamos una implementación de nodo y la lista:
 
 function Node (value) {
  this.value = value
  this.next = null
}

function LinkedList() {
  this.head = null
}