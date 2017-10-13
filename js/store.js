/*jshint eqeqeq:false */
(function (window) {
	'use strict';

	// init the IDB
	function Store(name, callback) {
		this.db = idb.open('MVC_DB', 1, function (upgradeDb) {
			const todosStore = upgradeDb.createObjectStore('todos');
		})
	}

	// get all data
	Store.prototype.findAll = function (callback) {
		this.db.then(function (db){
			const transaction = db.transaction('todos');
			const todoStore = transaction.objectStore('todos');	
			return todoStore.getAll();
		}).then( function (data){
			console.log(data);
			callback.call(this, data);
		})		
	};

	
	Store.prototype.save = function (updateData, callback, id) {
		// Generate an ID
		updateData.id = new Date().getTime();
		
		this.db.then(function (db) {
			const transaction = db.transaction('todos', 'readwrite');
			const todoStore = transaction.objectStore('todos');
		
			todoStore.put(updateData, updateData.id);
			return transaction.complete;
		})
			.then(function () {
				callback.call(this, updateData);
			});	
	};

	/**
	 * Will remove an item from the Store based on its ID
	 *
	 * @param {number} id The ID of the item you want to remove
	 * @param {function} callback The callback to fire after saving
	 */
	Store.prototype.remove = function (id, callback) {
		// var data = JSON.parse(localStorage[this._dbName]);
		// var todos = data.todos;

		// for (var i = 0; i < todos.length; i++) {
		// 	if (todos[i].id == id) {
		// 		todos.splice(i, 1);
		// 		break;
		// 	}
		// }

		// localStorage[this._dbName] = JSON.stringify(data);
		// callback.call(this, todos);
	};

	/**
	 * Will drop all storage and start fresh
	 *
	 * @param {function} callback The callback to fire after dropping the data
	 */
	Store.prototype.drop = function (callback) {
		this.db.then( function (db) {
			const transaction = db.transaction('todos', 'readwrite');
			const todoStore = transaction.objectStore('todos');
			
			todoStore.clear();			
		}).then(function () {
			callback.call(this);
		})
	};

	// Export to window
	window.app = window.app || {};
	window.app.Store = Store;
})(window);
