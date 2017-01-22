class POC.views.NavPeriod extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-nav-period'

  events:
    click: (e)->
      @highlight(e)
      $.event.trigger({
        val: @$el.find('.success').text()
        kind: 'period'
        type: 'viewChange'})

  highlight: (e)->
    $target = $(e.target)
    if $target.is('a')
      @$el.find('a').removeClass('success')
      $target.addClass('success')
