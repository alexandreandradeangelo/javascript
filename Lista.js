//Tipo Array Vazio 
let listaVazia = [];

//Tipo Array Vazio 
let listaValor = [1,2,3, 'Alexandre'];

// buscar valor dentro do array
//retorna o valor 
let item = listaValor.find(f => f =='Alexandre')
console.log(item);

// retorna uma nova lista
let itemFilter = listaValor.filter(i => i == 'Alexandre');
console.log(itemFilter);

//Me informa o tamanho 
console.log(listaValor.length);

//Adicionar intens na fila 
listaValor.push('Ana');

console.log(listaValor);

//Excluir itens da lista <- ultimo
listaValor.pop();
console.log(listaValor);

// Excluir determida posição 
let index = listaValor.indexOf('Alexandre');
console.log(listaValor.slice(0,index));

listaValor = lista