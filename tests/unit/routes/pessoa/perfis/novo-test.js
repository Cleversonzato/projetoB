import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pessoa/perfis/novo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pessoa/perfis/novo');
    assert.ok(route);
  });
});
