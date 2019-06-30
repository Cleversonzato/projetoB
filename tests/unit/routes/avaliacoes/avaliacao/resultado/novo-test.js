import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | avaliacoes/avaliacao/resultado/novo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:avaliacoes/avaliacao/resultado/novo');
    assert.ok(route);
  });
});
