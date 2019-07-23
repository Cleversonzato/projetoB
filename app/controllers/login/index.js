import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  ajax: service(),

  actions: {
    logar() {
     let { identification, password } = this.getProperties('identification', 'password');
     this.get('session').authenticate('authenticator:oauth2', identification, password)
        .then(()=>{
            this.pegaPessoa(this.get("session.data.authenticated"));
            this.transitionToRoute('pessoa.index'); },
        (reason) => {this.set('erro', reason.error || reason);
     });
   }
 },

 pegaPessoa: function (aut){
   this.get('ajax').request('https://avaliador-beta.herokuapp.com/usuarios/usuario?nome=' + aut.nome, {
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
