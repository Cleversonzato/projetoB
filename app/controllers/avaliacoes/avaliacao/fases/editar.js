import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  session: service(),

    actions:{
      salvar(){

        this.get('ajax').request('https://avaliador-alfa.herokuapp.com/fase/', {
          method: 'PUT',
          contentType: 'application/json; charset=UTF-8',
          headers:{
            Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token"),
          },
          data:JSON.stringify({
            data: {
              "id":this.model.id,
              "titulo":this.model.titulo,
              "dtInicio":this.model.dtInicio,
              "dtFim":this.model.dtFim,
              "descricao":this.model.descricao,
              "posicao":this.model.posicao,
        //      "campos":campos.value
            }

          })
        }
      ).then(
          (perfil)=> {this.transitionToRoute('avaliacoes.avaliacao.fases.show', this.model.id, {queryParams:{refresh:0}} ) } ,
          (reason)=>{this.set('erro', reason.error || reason);}
         );
       }
    }


});
