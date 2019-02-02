import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			books: this.store.findAll('book'),
			selectedBook: undefined
		}
	},

	actions: {
		createNewBook(bookDTO) {
			let book = this.store.createRecord('book', {
				name: bookDTO.bookName,
				author: bookDTO.authorName
			});

			book.save();
		},

		removeBookItem(id) {
			this.store.findRecord('book', id).then(function(book) {
				book.deleteRecord();
				book.get('isDeleted');
				book.save();
			});
		},

		updateBook(bookDTO) {
			this.store.findRecord('book', bookDTO.id).then(function(book) {
				book.set('name',bookDTO.bookName);
				book.set('author',bookDTO.authorName);
				book.save();
			});
		}
	}
});
