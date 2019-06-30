import Component from '@ember/component';

export default Component.extend({
  actions: {
   enviar(model) {
     model.save().then(() => {this.posEnviar()},
           (erro) =>{
               this.set('erro', erro);
           });
   }
 }
});
