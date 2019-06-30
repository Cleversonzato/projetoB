import Inflector from 'ember-inflector';

export function initialize(/* application */) {
   Inflector.inflector.irregular('organizacao','organizacoes');
   Inflector.inflector.irregular('login','login');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
