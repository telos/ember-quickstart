import Ember from 'ember'

export default Ember.Route.extend({
	model() {
		return ['PC Repair', 'Network Disgnostics', 'Home Audio Installations'];
		// return this.store.findAll('services');
	}
});