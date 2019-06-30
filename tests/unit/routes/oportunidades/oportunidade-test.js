import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | oportunidades/oportunidade', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:oportunidades/oportunidade');
    assert.ok(route);
  });
});
