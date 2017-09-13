import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');

  this.resource('posts', {path: '/posts'}, function(){
    this.route('new');
    this.route('post', {path:':post_id'});
  });
});

export default Router;
