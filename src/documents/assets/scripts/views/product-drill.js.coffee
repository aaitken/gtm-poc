class POC.views.ProductDrill extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-product-drill'
  initialize: ->
    @model = POC.models.Filter.singleton()
    @filterPlaceholder = POC.views.FilterPlaceholder.singleton()
    @FilterPill = POC.views.FilterPill

  drill: (val)->
    @filter(val)
    @pillify()
    @filterPlaceholder.hide()
    
  undrill: ->
    @unfilter()
    @pillify()
    if ! $('.ama-filter-pill').length
      @filterPlaceholder.show()

  hide: ->
    @$el.addClass('ama-is-hidden')

  show: ->
    @$el.removeClass('ama-is-hidden')

  filter: (val)->
    currentProduct =  @model.get('product')
    if currentProduct is ''
      @model.set('product', val)
    else
      @model.set('product', "#{currentProduct},#{val}")

  unfilter: ->
    currentProduct = @model.get('product')
    currentProduct = currentProduct.replace(/,*[^,]+$/g, '')
    @model.set('product', currentProduct)

  pillify: ->
    pillText = @model.getDisplayValue('product')
    if ! @filterPill
      @filterPill = new @FilterPill()
      @filterPill.render()
      @filterPill.setText(pillText)
    else if pillText is ''
      @filterPill.remove()
      @filterPill = null
    else
      @filterPill.setText(pillText)
    
