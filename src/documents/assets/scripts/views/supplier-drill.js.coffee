class POC.views.SupplierDrill extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-supplier-drill'

  hide: ->
    @$el.addClass('ama-is-hidden')

  show: ->
    @$el.removeClass('ama-is-hidden')
