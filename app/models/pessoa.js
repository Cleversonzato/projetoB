import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  //basicos
  usuario: DS.belongsTo('usuario', { inverse: null }),
  nome:attr('string'),
  sexo:attr('string'),
  dtNascimento:attr('date'),

  //documentos
  cpf:attr('string'),
  pisPasep:attr('string'),
  rg:attr('string'),
  rgEmissor:attr('string'),
  rgData:attr('date'),

  //contato
  telefone1:attr('string'),
  telefone2:attr('string'),
  emailContato:attr('string'),
  cep:attr('string'),
  pais:attr('string'),
  estado:attr('string'),
  cidade:attr('string'),
  bairro:attr('string'),
  logradouro:attr('string'),
  numero:attr('string'),
  complemento:attr('string'),

  //
  pessoa: DS.hasMany('perfil'),




});
