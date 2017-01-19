class POC.views.ProductDrill extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-product-drill'

  hide: ->
    @$el.addClass('ama-is-hidden')

  show: ->
    @$el.removeClass('ama-is-hidden')
