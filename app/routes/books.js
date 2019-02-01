import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return ['The god of small things', 'Book of Ram', 'History of the world'];
	}
});
