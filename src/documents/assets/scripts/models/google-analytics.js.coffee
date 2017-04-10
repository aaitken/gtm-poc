class POC.models.GoogleAnalytics extends Backbone.Model

  @singleton = ->
    @instance ?= new this()

  initialize: ->
    @dataLayer = window.dataLayer

  defaults: {
    'User Id': ''
    'User Type': ''
    'Section': 'Analysis'
    'Sub-Section L1': 'Net Sales'
    'Sub-Section L2': 'Product'
    'Filter 1': ''
    'Filter 2': ''
    'Filter 3': ''
    'Period': 'YTD'}

  sendView: ->
    @dataLayer.push {
      'event': 'view'
      'Section': @get('Section')
      'Sub-Section L1': @get('Sub-Section L1')
      'Sub-Section L2': @get('Sub-Section L2')}

  sendFilter: (filterEvent)->
    @dataLayer.push {
      'event': filterEvent
      'Filter 1': @get('Filter 1')
      'Filter 2': @get('Filter 2')
      'Filter 3': @get('Filter 3')
      'Period': @get('Period')}

  sendUser: ->
    @dataLayer.push {
      'event': 'setUser'
      'User Id': @get('User Id')
      'User Type': @get('User Type')}
