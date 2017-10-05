import Ember from 'ember';

export default Ember.Route.extend({

  //queryParams:{refid: {refreshModel:true}},
   model(params) {
    //  console.log(params.refid);
     return Ember.$.getJSON("http://localhost:4000/api/search?ref_id="+params.refid);
   }
});
