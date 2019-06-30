import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  dtInicio:attr('date'),
  dtFim:attr('date'),
  estado:attr('string'),
  participantes:DS.hasMany('perfil'),

  respostas:DS.hasMany('campo'),
  resultados:DS.belongsTo('resultadosAvaliacao'),
  tipo:DS.belongsTo('faseAvaliacaoTemplate')
});
