class POC.models.Filter extends Backbone.Model

  @singleton = ->
    @instance ?= new this()

  defaults: {
    section: ''
    kpi: ''
    breakout: ''
    period: ''
    product: ''
    organization: ''
    supplier: ''}
