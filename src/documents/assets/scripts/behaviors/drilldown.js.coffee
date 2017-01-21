class POC.behaviors.Drilldowns

  @singleton = ->
    @instance ?= new this()

  constructor: ->
    @$listener = $('.ama-drill-container .menu a')
    @init()

  init: ->
    that = this
    @$listener.click (e)->
      that.nextLevel = $(@).next()[0] || null
      that.$levelOptions = $(@).parent().parent().find('li:gt(0)')
      that.selection = $(@).text()
      that.drillDown = $(e.target).parentsUntil('[data-id="ama-drill-container"]').find('[data-id]').eq(0).attr('data-id')
      if that.selection isnt 'Back' then that.drill(e)
      else that.undrill(e)

  drill: (e)->
    $.event.trigger({
      value: $(e.target).text()
      drillDown: @drillDown
      type: 'drill'})
    if ! @nextLevel
      @$levelOptions.hide()

  undrill: (e)->
    $.event.trigger({
      drillDown: @drillDown
      type: 'undrill'})
    if ! @$levelOptions.filter(':visible').length
      e.stopImmediatePropagation()
      @$levelOptions.show()
