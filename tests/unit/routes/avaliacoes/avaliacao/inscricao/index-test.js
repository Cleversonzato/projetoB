import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | avaliacoes/avaliacao/inscricao/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:avaliacoes/avaliacao/inscricao/index');
    assert.ok(route);
  });
});
