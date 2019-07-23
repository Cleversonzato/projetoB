import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),

  actions: {
   posEnviar() {
      this.transitionToRoute('login');
   },

   salvar(){
     const {nome, senha, cpf, email}  = this.getProperties( 'nome', 'senha', 'cpf', 'email');

     this.get('ajax').request(' http://localhost:8080/usuarios', {
       method: 'POST',
       contentType: 'application/json; charset=UTF-8',
       data:JSON.stringify({
         data: {
             clientId: nome,
             clientSecret: senha,
             cpf:cpf,
             email:email
         }

       })
     }
   ).then(
       ()=> {this.transitionToRoute('login');} ,
       (reason)=>{this.set('erro', reason.error || reason);}
      );
    }
  }

});
