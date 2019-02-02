import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	bookName: '',
	authorName: '',
	showAddWindow: false,
	showEditWindow: false,
	selectedId: undefined,
	store: service(),

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
			var self = this;
			
			this.store.findRecord('book', id).then(function(book) {
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
