class POC.views.NavUser extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-nav-user'

  events:
    click: (e)->
      @update(e)

  update: (e)->
    $target = $(e.target)
    if $target.is('a')
      @$el.find('a').eq(0).text $target.text()
      
