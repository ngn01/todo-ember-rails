Todos.Store = DS.Store.extend({

});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
//Todos.ApplicationAdapter = DS.ActiveModelAdapter.extend({
//});

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
