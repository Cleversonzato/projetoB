import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', function() {
    this.route('novo');
  });

  this.route('oportunidades', function() {
    this.route('oportunidade');
  });
  this.route('pessoa');
});

export default Router;
