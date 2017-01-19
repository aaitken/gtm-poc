class POC.views.NavThree extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-nav3'

  events:
    click: (e)->
      @highlight(e)

  highlight: (e)->
    $target = $(e.target)
    if $target.is('a')
      @$el.find('a').removeClass('success')
      $target.addClass('success')
