import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  session: service(),

actions:{
  editar(){
    const {model}  = this.getProperties( 'model');

    this.get('ajax').request('https://avaliador-beta.herokuapp.com/processos', {
      method: 'PUT',
      contentType: 'application/json; charset=UTF-8',
      headers:{
        Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token"),
      },
      data:JSON.stringify({
        data: {
          "id":id.value,
          "criador":{id:criador.value},
          "titulo":titulo.value,
          "dtInicio":dtInicio.value,
          "descricao":descricao.value,
        }

      })
    }
  ).then(
      ()=> {this.transitionToRoute('avaliacoes', {queryParams:{refresh: true }} );} ,
      (reason)=>{this.set('erro', reason.error || reason);}
     );
   }
}
});
