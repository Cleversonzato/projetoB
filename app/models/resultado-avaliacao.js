import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  campo:DS.hasMany('campo'),
  comentarios:attr('string'),
  aprovados:DS.hasMany('perfil'),
  tipo:DS.belongsTo('resultadosAvaliacaoTemplate')
});
