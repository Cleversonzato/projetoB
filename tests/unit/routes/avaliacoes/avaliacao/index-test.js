import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | avaliacoes/avaliacao/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:avaliacoes/avaliacao/index');
    assert.ok(route);
  });
});
