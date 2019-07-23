import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from '../../config/environment';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
ajax:service(),
queryParams: {
  refresh: {
    refreshModel: true
  }
},

  model(params){
  return this.get('ajax').request(ENV.host +'processos/pessoa/'+this.get("session.data.pessoa"), {
    method: 'GET',
    headers:{
      Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token")
      }
    }
  ).then((resultado)=>{return resultado.data})
  },


});
