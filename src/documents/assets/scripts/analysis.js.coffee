POC.data.Drills.singleton()
POC.views.NavOne.singleton()
POC.views.NavTwo.singleton()
POC.behaviors.Drilldown.singleton()

#filters = []
#$('ul.vertical.menu a').click (e)->
  #nextLevel = $(@).next()[0] || null
  #$levelOptions = $(@).parent().parent().find('li:gt(0)')
  #selection = $(@).text()
  #$catcher = $('#ama-filter')
  #if selection isnt 'Back'
    #filters.push selection
    #if ! nextLevel
      #$levelOptions.hide()
    #$catcher.text selection
  #else
    #filters.pop()
    #if ! $levelOptions.filter(':visible').length
      #$levelOptions.show()
      #e.stopImmediatePropagation()
    #if filters.length isnt 0
      #$catcher.text filters[filters.length-1]
    #else
      #$catcher.text 'All'

$(document).ready ->
  POC.views.ProductDrill.singleton().show()
