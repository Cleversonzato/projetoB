import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  session: service(),
  queryParams: ['refresh'],
  refresh:null,

actions:{
  excluir(perfil_id){
    let atualizar = this.refresh;
    if(atualizar == 2){
      atualizar=1;
    } else{
      atualizar = 2;
    }

    this.get('ajax').request('https://avaliador-alfa.herokuapp.com/pessoas/'+this.get("session.data.pessoa")+'/perfis/'+perfil_id, {
      method: 'DELETE',
      contentType: 'application/json; charset=UTF-8',
      headers:{
        Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token"),
      },
    }
  ).then(
      ()=> {this.transitionToRoute('pessoa.index',{queryParams:{refresh: atualizar }})} ,
      (reason)=>{this.set('erro', reason.error || reason);}
  );
   },

}
});
