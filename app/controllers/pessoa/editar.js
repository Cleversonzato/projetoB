import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  session: service(),

actions:{
  editar(){
    const {model}  = this.getProperties( 'model');

    this.get('ajax').request('https://avaliador-beta.herokuapp.com/pessoas', {
      method: 'PUT',
      contentType: 'application/json; charset=UTF-8',
      headers:{
        Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token"),
      },
      data:JSON.stringify({
        data: {
            id: model.id,
            nome: model.nome,
            dtNascimento: model.dtNascimento,
            sexo: model.sexo,
            cpf: model.cpf,
            rg: model.rg,
            rgEmissor: model.rgEmissor,
            pisPasep: model.pisPasep,
            rgData:model.rgData
        }

      })
    }
  ).then(
      ()=> {this.transitionToRoute('pessoa');} ,
      (reason)=>{this.set('erro', reason.error || reason);}
     );
   }
}
});
