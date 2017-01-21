class POC.models.Filter extends Backbone.Model

  @singleton = ->
    @instance ?= new this()

  defaults: {
    product: ''
    organization: ''
    supplier: ''}

  getDisplayValue: (key)->
    value = @get(key)
    if value.indexOf(',') > 0
      displayValue = value.split(',')[value.split(',').length-1]
    else
      displayValue = value
    return displayValue
