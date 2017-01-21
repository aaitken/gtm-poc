class POC.views.NavBreakout extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-nav-breakout'

  initialize: ->
    @productDrill = POC.views.ProductDrill.singleton()
    @organizationDrill = POC.views.OrganizationDrill.singleton()
    @supplierDrill = POC.views.SupplierDrill.singleton()

  events:
    click: (e)->
      @highlight(e)

  highlight: (e)->
    @$target = $target = $(e.target)
    if $target.is('a')
      @$el.find('a').removeClass('success')
      $target.addClass('success')
      @showDrill()

  showDrill: ->
    @productDrill.hide()
    @organizationDrill.hide()
    @supplierDrill.hide()
    switch @$target.text()
      when 'Product' then @productDrill.show()
      when 'Organization' then @organizationDrill.show()
      when 'Supplier' then @supplierDrill.show()
