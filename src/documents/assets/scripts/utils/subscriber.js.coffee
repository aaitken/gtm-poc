class POC.utils.Subscriber

  @singleton = ->
    @instance ?= new this()
  
  constructor: ->
    @model = POC.models.Filter.singleton()
    @productDrill = POC.views.ProductDrill.singleton()
    @organizationDrill = POC.views.OrganizationDrill.singleton()
    @supplierDrill = POC.views.SupplierDrill.singleton()
    @listen()

  listen: ->
    $(document ).on 'viewChange', (e)=>
      console.log e.val
      switch e.kind
        when 'drill' then @drill(e)
        when 'undrill' then @undrill(e)

  drill: (e)->
    switch e.drillDown
      when 'ama-product-drill' then @productDrill.drill(e.val)
      when 'ama-organization-drill' then @organizationDrill.drill(e.val)
      when 'ama-supplier-drill' then @supplierDrill.drill(e.val)

  
  undrill: (e)->
    switch e.drillDown
      when 'ama-product-drill' then @productDrill.undrill()
      when 'ama-organization-drill' then @organizationDrill.undrill()
      when 'ama-supplier-drill' then @supplierDrill.undrill()
