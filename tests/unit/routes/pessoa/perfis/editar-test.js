import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pessoa/perfis/editar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pessoa/perfis/editar');
    assert.ok(route);
  });
});
