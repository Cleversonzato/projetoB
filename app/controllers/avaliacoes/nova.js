import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  session: service(),

actions:{
  salvar(){

    this.get('ajax').request('https://avaliador-alfa.herokuapp.com/processos/'+ this.get("session.data.pessoa"), {
      method: 'POST',
      contentType: 'application/json; charset=UTF-8',
      headers:{
        Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token"),
      },
      data:JSON.stringify({
        data: {
          "titulo":titulo.value,
          "dtInicio":dtInicio.value,
          "descricao":descricao.value,
    //      "campos":campos.value
        }

      })
    }
  ).then(
      (perfil)=> {this.transitionToRoute('avaliacoes', {queryParams:{refresh:0}} ) } ,
      (reason)=>{this.set('erro', reason.error || reason);}
     );
   }
}
});
