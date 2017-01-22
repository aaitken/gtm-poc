class POC.utils.Subscriber

  @singleton = ->
    @instance ?= new this()
  
  constructor: ->
    @modelFilter = POC.models.Filter.singleton()
    @modelGA = POC.models.GA.singleton()
    @productDrill = POC.views.ProductDrill.singleton()
    @organizationDrill = POC.views.OrganizationDrill.singleton()
    @supplierDrill = POC.views.SupplierDrill.singleton()
    @listen()

  listen: ->
    $(document ).on 'viewChange', (e)=>
      switch e.kind
        when 'drill' then @drill(e)
        when 'undrill' then @undrill(e)
        when 'kpi' then @kpi(e)
        when 'breakout' then @breakout(e)
        when 'period' then @period(e)

  drill: (e)->
    switch e.drillDown
      when 'ama-product-drill'
        @productDrill.drill(e.val)
        console.log @model.getDisplayValue('product')
      when 'ama-organization-drill'
        @organizationDrill.drill(e.val)
        console.log @model.getDisplayValue('organization')
      when 'ama-supplier-drill'
        @supplierDrill.drill(e.val)
        console.log @model.getDisplayValue('supplier')

  undrill: (e)->
    switch e.drillDown
      when 'ama-product-drill'
        @productDrill.undrill()
        console.log @model.getDisplayValue('product')
      when 'ama-organization-drill'
        @organizationDrill.undrill()
        console.log @model.getDisplayValue('organization')
      when 'ama-supplier-drill'
        @supplierDrill.undrill()
        console.log @model.getDisplayValue('supplier')


  kpi: (e)->
    console.log e.val

  breakout: (e)->
    console.log e.val

  period: (e)->
    console.log e.val
