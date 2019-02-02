import Component from '@ember/component';

export default Component.extend({
	bookName: '',
	authorName: '',
	showAddWindow: false,
	showEditWindow: false,
	selectedId: undefined,
	store: Ember.inject.service(),

	actions: {
		addDialogBtnClick() {
			this.set('showAddWindow', true);
		},

		submit() {
			this.handleCreateRecord({
				bookName: this.bookName,
				authorName: this.authorName
			});
			this.set('showAddWindow', false);
			this.set('bookName', '');
			this.set('authorName', '');
		},

		editBookItem(id) {
			var store = this.get('store');
			var self = this;
			
			let book = this.store.findRecord('book', id).then(function(book) {
			  self.set('selectedId', book.id);
			  self.set('showEditWindow', true);
			  self.set('bookName', book.name);
			  self.set('authorName', book.author);
			});
		},

		cancel() {
			this.set('showAddWindow', false);
			this.set('bookName', '');
			this.set('authorName', '');
		},

		update() {
			this.handleUpdateRecord({
				id: this.selectedId,
				bookName: this.bookName,
				authorName: this.authorName
			});
			this.set('showEditWindow', false);
			this.set('bookName', '');
			this.set('authorName', '');
		},

		cancelUpdate() {
			this.set('showEditWindow', false);
			this.set('bookName', '');
			this.set('authorName', '');
		}
	}
});
