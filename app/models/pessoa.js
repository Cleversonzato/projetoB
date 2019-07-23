import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  //basicos
  nome:attr('string'),
  cpf:attr('string'),
  sexo:attr('string'),
  dtNascimento:attr('date'),
  pisPasep:attr('string'),
  rg:attr('string'),
  rgEmissor:attr('string'),
  rgData:attr('date'),

  //Perfis
  perfis: DS.hasMany('perfil'),

  //Organizacoes
  organizacoes: DS.hasMany('organizacao'),

  //Organizacoes
  processos: DS.hasMany('processos')
});
