class POC.behaviors.Drilldown

  @singleton = ->
    @instance ?= new this()

  constructor: ->
    @$listener = $('ul.vertical.menu a')
    @init()

  init: ->
    that = this
    @$listener.click (e)->
      that.nextLevel = $(@).next()[0] || null
      that.$levelOptions = $(@).parent().parent().find('li:gt(0)')
      that.selection = $(@).text()
      if that.selection isnt 'Back' then that.drill()
      else that.return(e)

  drill: ->
    if ! @nextLevel
      @$levelOptions.hide()

  return: (e)->
    if ! @$levelOptions.filter(':visible').length
      @$levelOptions.show()
      e.stopImmediatePropagation()
