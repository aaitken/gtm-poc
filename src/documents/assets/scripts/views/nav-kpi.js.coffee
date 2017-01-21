class POC.views.NavKPI extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-nav-kpi'
  initialize: ->
    @val = @$el.find('.success').text()

  events:
    click: (e)->
      @highlight(e)
      $.event.trigger({
        val: @$el.find('.success').text()
        kind: 'kpi'
        type: 'viewChange'})

  highlight: (e)->
    $target = $(e.target)
    if $target.is('a')
      @$el.find('a').removeClass('success')
      $target.addClass('success')
