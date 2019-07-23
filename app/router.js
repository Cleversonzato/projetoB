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

  this.route('pessoa', function() {
    this.route('editar');
    this.route('perfis', function() {
      this.route('index',{path:'/:perfil_id'});
      this.route('novo');
      this.route('editar', {path:'editar/:perfil_id'});
    });
  });
  this.route('avaliacoes', function() {
    this.route('nova');
    this.route('editar', {path:'editar/:processo_id'} );

    this.route('avaliacao', function() {
      this.route('fases', function() {
        this.route('nova', {path:'nova/:processo_id'});
        this.route('show',{path:'show/:fase_id'});
        this.route('editar', {path:'editar/:fase_id'} );
      });
    });
  });
});

export default Router;
