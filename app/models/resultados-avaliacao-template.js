import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  titulo:attr('string'),
  campoTemplate:DS.hasMany('campoTemplate')
});
