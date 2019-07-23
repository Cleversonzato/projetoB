import Route from '@ember/routing/route';

export default Route.extend({
  model(processo_id){//return this.store.find('pessoa', this.get("session.data.pessoa")); }
    return processo_id;
  },
});
