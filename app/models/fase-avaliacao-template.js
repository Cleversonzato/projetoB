import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  titulo:attr('string'),
  descricao:attr('string'),

  respostasTemplate:DS.hasMany('campoTemplate')
});
