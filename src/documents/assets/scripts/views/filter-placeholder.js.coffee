class POC.views.FilterPlaceholder extends Backbone.View
  
  @singleton = ->
    @instance ?= new this()
  
  el: '#ama-filter-placeholder'

  hide: ->
    @$el.addClass('ama-is-hidden')

  show: ->
    @$el.removeClass('ama-is-hidden')
