import DS from 'ember-data';
import { isPresent } from '@ember/utils';
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";

export default DS.RESTAdapter.extend(DataAdapterMixin,{
  host: 'https://avaliador-alfa.herokuapp.com/',

  authorize(xhr) {
    let { access_token } = this.get('session.data.authenticated');
    if (isPresent(access_token)) {
      xhr.setRequestHeader('Authorization', 'Bearer '+ access_token);
    }
  }
});
