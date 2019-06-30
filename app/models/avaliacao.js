import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  criador: DS.belongsTo('usuario', { inverse: null }),
  grupo: DS.belongsTo('organizacao'),

  estado:attr('string'),
  titulo:attr('string'),
  descricao:attr('string'),
  dtInicio:attr('date'),
  dtFim:attr('date'),
  dtInicioPlanejada:attr('date'),
  dtFimPlanejada:attr('date'),
  numFases:attr('number'),

  InscricaoAvaliacaoTemplate: DS.belongsTo('InscricaoAvaliacaoTemplate'),
  inscricoes: DS.hasMany('inscricaoAvaliacao'),
  faseAvaliacaoTemplate: DS.belongsTo('faseAvaliacaoTemplate'),
  faseAvaliacao:DS.hasMany('faseAvaliacao'),
  resultados: DS.belongsTo('resultadoAvaliacao'),

});
