import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  session: service(),

actions:{
  salvar(){

    this.get('ajax').request('https://avaliador-beta.herokuapp.com/pessoas/'+this.get("session.data.pessoa")+'/perfis', {
      method: 'POST',
      contentType: 'application/json; charset=UTF-8',
      headers:{
        Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token"),
      },
      data:JSON.stringify({
        data: {
          "titulo":titulo.value,
    //      "campos":campos.value
        }

      })
    }
  ).then(
      (perfil)=> {this.transitionToRoute('pessoa', {queryParams:{refresh:0}} ) } ,
      (reason)=>{this.set('erro', reason.error || reason);}
     );
   }
}
});
