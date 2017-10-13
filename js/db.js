// const db = idb.open('MVC_DB', 1, function (upgradeDb) {
//   const todosStore = upgradeDb.createObjectStore('todos');
// })

//  reading a value out of the store
// db.then(function (db) {
//   const transaction = db.transaction('todos');
//   const todoStore = transaction.objectStore('todos');

//   return todoStore.get('hello');
// })
//   .then(function (value) {
//     console.log('the value for hello is: ' + value);
//   });

// //  writing a value to the store
// db.then(function (db) {
//   const transaction = db.transaction('todos', 'readwrite');
//   const todoStore = transaction.objectStore('todos');

//   todoStore.put('world', 'hello');
//   return transaction.complete;
// })
//   .then(function () {
//     console.log('transaction completed')
//   });
