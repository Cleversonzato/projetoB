import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from '../config/environment';

export default Controller.extend({
  session: service(),
  ajax:service(),

  init(){
    let session  = this.get('session');
    if (session.isAuthenticated) {
      this.pegaPessoa(this.get("session.data.authenticated"));
    }
  },

  actions: {
   invalidateSession() {
    this.get('session').invalidate();
    this.transitionToRoute('index');
   }
 },

 pegaPessoa: function (aut){
   this.get('ajax').request(ENV.host +'usuarios/usuario?nome=' + aut.nome, {
     method: 'GET',
     headers:{
       Authorization: 'Bearer ' + aut.access_token
     }
   }
 ).then(
     (usuario)=> {this.set('session.data.pessoa', usuario.data.pessoa.id); this.set('session.data.usuario', usuario.data.id);} ,
     ()=>{this.get('session').invalidate();}
    );
 }

});
