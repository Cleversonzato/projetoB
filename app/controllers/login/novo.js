import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
   posEnviar() {
      this.transitionToRoute('login');
   }
 }
});
