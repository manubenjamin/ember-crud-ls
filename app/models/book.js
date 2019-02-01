import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	author: DS.attr('string'),
	coverImage: DS.attr('string'),
	price: DS.attr('boolean'),
	ratings: DS.attr('boolean')
});
