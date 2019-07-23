import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pessoa/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pessoa/index');
    assert.ok(route);
  });
});
