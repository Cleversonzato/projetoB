import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';
import ENV from '../../../../config/environment';

export default Route.extend({
  ajax:service(),
  session:service(),

  model(fase){//return this.store.find('pessoa', this.get("session.data.pessoa")); }
  return this.get('ajax').request(ENV.host +'fase/' + fase.fase_id, {
    method: 'GET',
    headers:{
      Authorization: 'Bearer ' + this.get("session.data.authenticated.access_token")
      }
    }
  ).then((resultado)=>{return resultado.data})
  },
});
