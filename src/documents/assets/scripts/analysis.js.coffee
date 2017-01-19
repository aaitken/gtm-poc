POC.data.Drills.singleton()
POC.views.NavOne.singleton()
POC.views.NavTwo.singleton()
POC.views.NavThree.singleton()
POC.behaviors.Drilldowns.singleton()

$(document).ready ->
  POC.views.ProductDrill.singleton().show()
