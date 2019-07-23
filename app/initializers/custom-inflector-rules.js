import Inflector from 'ember-inflector';

export function initialize(/* application */) {
   Inflector.inflector.irregular('organizacao','organizacoes');
   Inflector.inflector.irregular('login','login');
   Inflector.inflector.irregular('perfil','perfis');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
