import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    logar() {
     let { identification, password } = this.getProperties('identification', 'password');
     this.get('session').authenticate('authenticator:oauth2', identification, password)
        .then(()=>{ this.transitionToRoute('pessoa'); },
        (reason) => {this.set('erro', reason.error || reason);
     });
   }
 }
});
