import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import { inject as service } from '@ember/service'

export default OAuth2PasswordGrantAuthenticator.extend({
  session: service(),
  ajax:service(),
  // restore(data) {
  // },

  authenticate(usuario, senha) {
    return this.get('ajax').request('https://avaliador-alfa.herokuapp.com/' + 'oauth/token', {
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            headers:{
              Authorization: 'Basic ' + btoa(usuario + ":" + senha)
            },
            data: {
              grant_type: 'client_credentials'
            }
          });
  },

  invalidate(data) {
    this.get('ajax').request('https://avaliador-alfa.herokuapp.com/' + 'oauth/logout'), {method: 'GET'};

    return this._super(data);
  }
});
