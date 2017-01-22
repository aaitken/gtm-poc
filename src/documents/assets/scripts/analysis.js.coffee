POC.models.GoogleAnalytics.singleton()
POC.models.Filter.singleton()
POC.views.NavKPI.singleton()
POC.views.NavBreakout.singleton()
POC.views.NavUser.singleton()
POC.views.NavPeriod.singleton()
POC.behaviors.Drilldowns.singleton()
POC.utils.Subscriber.singleton()

$(document).ready ->
  POC.views.ProductDrill.singleton().show()
