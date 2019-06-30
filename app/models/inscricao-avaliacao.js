import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  dtInicio:attr('date'),
  dtFim:attr('date'),
  estado:attr('string'),
  campo:DS.hasMany('campo'),
  tipo:DS.belongsTo('inscricaoAvaliacaoTemplate')
});
