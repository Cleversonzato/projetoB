import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  clientId:attr('string'),
  clientSecret:attr('string'),
  email:attr('string'),
  cpf:attr('string'),
  authorities:attr()
});
