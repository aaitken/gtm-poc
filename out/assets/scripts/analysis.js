(function() {
  POC.data.Drills.singleton();

  POC.views.NavOne.singleton();

  POC.views.NavTwo.singleton();

  POC.behaviors.Drilldown.singleton();

  $(document).ready(function() {
    return POC.views.ProductDrill.singleton().show();
  });

}).call(this);
