class POC.views.NavPeriod extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-nav-period'

  events:
    click: (e)->
      @highlight(e)

  highlight: (e)->
    $target = $(e.target)
    if $target.is('a')
      @$el.find('a').removeClass('success')
      $target.addClass('success')
