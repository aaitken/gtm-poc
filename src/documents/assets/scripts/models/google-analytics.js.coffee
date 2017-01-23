class POC.models.GoogleAnalytics extends Backbone.Model

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @dataLayer = window.dataLayer

  defaults: {
    'Section': 'Analysis'
    'Sub-Section L1': 'Net Sales'
    'Sub-Section L2': 'Product'
    'Filter 1': ''
    'Filter 2': ''
    'Filter 3': ''
    'Period': 'YTD'}

  sendView: ->
    @dataLayer.push {
      'Section': @get('Section')
      'Sub-Section L1': @get('Sub-Section L1')
      'Sub-Section L2': @get('Sub-Section L2')}

  sendFilter: ->
