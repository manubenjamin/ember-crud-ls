import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.store.peekAll('book')
	},

	actions: {
		createNewBook(bookName) {
			this.store.createRecord('book', {
				name: bookName,
				author: 'Chetan Bhagat',
				coverImage: 'imageurl',
				price: 400,
				ratings: 4.8
			});
		}
	}
});
