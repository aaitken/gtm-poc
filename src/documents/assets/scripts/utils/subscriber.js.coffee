class POC.utils.Subscriber

  @singleton = ->
    @instance ?= new this()
  
  constructor: ->
    @modelFilter = POC.models.Filter.singleton()
    @modelGA = POC.models.GoogleAnalytics.singleton()
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
        @setGAFilter('Filter 1', 'product')
      when 'ama-organization-drill'
        @organizationDrill.drill(e.val)
        @setGAFilter('Filter 2', 'organization')
      when 'ama-supplier-drill'
        @supplierDrill.drill(e.val)
        @setGAFilter('Filter 3', 'supplier')

  undrill: (e)->
    switch e.drillDown
      when 'ama-product-drill'
        @productDrill.undrill()
        @setGAFilter('Filter 1', 'product')
      when 'ama-organization-drill'
        @organizationDrill.undrill()
        @setGAFilter('Filter 2', 'organization')
      when 'ama-supplier-drill'
        @supplierDrill.undrill()
        @setGAFilter('Filter 3', 'supplier')

  setGAFilter: (key, filterDimension)->
    @modelGA.set(key, @modelFilter.getDisplayValue(filterDimension))
    @modelGA.sendFilter()


  kpi: (e)->
    @modelGA.set('Sub-Section L1', e.val)
    @modelGA.sendView()

  breakout: (e)->
    @modelGA.set('Sub-Section L2', e.val)
    @modelGA.sendView()

  period: (e)->
    @modelGA.set('Period', e.val)
    @modelGA.sendFilter()
