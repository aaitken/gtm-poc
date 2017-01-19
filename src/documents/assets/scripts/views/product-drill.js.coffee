class POC.views.ProductDrill extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-product-drill'

  # don't think this belongs here - abstract out
  initialize: ->
    $(document).on 'drill', (e)=>
      @updateData(e)
    $(document).on 'undrill', (e)=>
      @updateData(e)

  hide: ->
    @$el.addClass('ama-is-hidden')

  show: ->
    @$el.removeClass('ama-is-hidden')

  updateData: (e)->
    console.log e

