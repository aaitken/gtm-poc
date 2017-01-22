class POC.models.GoogleAnalytics extends Backbone.Model

  @singleton = ->
    @instance ?= new this()

  defaults: {
    'Section': 'Analysis'
    'Sub-Section L1': 'Net Sales'
    'Sub-Section L2': 'Product'
    'Filter 1': ''
    'Filter 2': ''
    'Filter 3': ''
    'Period': 'YTD'}

  sendView: ->

  sendFilter: ->
