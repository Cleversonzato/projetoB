import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  session: service(),
    queryParams: ['processo'],
    processo:null,

    actions:{
      salvar(){

        this.get('ajax').request(' http://localhost:8080/fase/'+ this.model.processo_id, {
          method: 'POST',
          contentType: 'application/json; charset=UTF-8',
          headers:{
            Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token"),
          },
          data:JSON.stringify({
            data: {

              "titulo":titulo.value,
              "dtInicio":dtInicio.value,
              "dtFim":dtFim.value,
              "descricao":descricao.value,
              "posicao":posicao.value,
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
