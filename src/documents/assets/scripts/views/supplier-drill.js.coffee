class POC.views.SupplierDrill extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-supplier-drill'
  initialize: ->
    @model = POC.models.Filter.singleton()
    @filterPlaceholder = POC.views.FilterPlaceholder.singleton()
    @FilterPill = POC.views.FilterPill
    @subscribe()

  subscribe: ->
    $(document ).on 'drill', (e)=>
      if e.drillDown is 'ama-supplier-drill'
        @filter(e.value)
        @pillify()
        @filterPlaceholder.hide()
    $(document ).on 'undrill', (e)=>
      if e.drillDown is 'ama-supplier-drill'
        @unfilter()
        @pillify()
        if ! $('.ama-filter-pill').length
          @filterPlaceholder.show()

  hide: ->
    @$el.addClass('ama-is-hidden')

  show: ->
    @$el.removeClass('ama-is-hidden')

  filter: (val)->
    currentSupplier =  @model.get('supplier')
    if currentSupplier is ''
      @model.set('supplier', val)
    else
      @model.set('supplier', "#{currentSupplier},#{val}")

  unfilter: ->
    currentSupplier = @model.get('supplier')
    currentSupplier = currentSupplier.replace(/,*[^,]+$/g, '')
    @model.set('supplier', currentSupplier)

  pillify: ->
    pillText = @model.getDisplayValue('supplier')
    if ! @filterPill
      @filterPill = new @FilterPill()
      @filterPill.render()
      @filterPill.setText(pillText)
    else if pillText is ''
      @filterPill.remove()
      @filterPill = null
    else
      @filterPill.setText(pillText)
