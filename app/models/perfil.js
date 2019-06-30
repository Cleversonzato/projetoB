import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

    avaliacoes: DS.hasMany('avaliacao'),
    //dados basicos
    //outros contatos?
    campo:DS.hasMany('campo')

});
