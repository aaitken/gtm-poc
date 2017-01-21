(function() {
  POC.models.Filter.singleton();

  POC.views.NavKPI.singleton();

  POC.views.NavBreakout.singleton();

  POC.views.NavUser.singleton();

  POC.views.NavPeriod.singleton();

  POC.behaviors.Drilldowns.singleton();

  $(document).ready(function() {
    return POC.views.ProductDrill.singleton().show();
  });

}).call(this);
