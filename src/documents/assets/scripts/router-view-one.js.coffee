POC.RouterOne = class extends Backbone.Router

  routes: {
    'state-one': 'one'
    'state-two': 'two'
    'state-three': 'three'
    '*notFound': 'notFound'}

  constructor: ->
    super()
    @init()

  one: ->
    $('p').removeClass().addClass('state-one')
    window.dataLayer.push({
      'event': 'virtualPageView'
      viewName: 'View One/State One'
      viewTitle: 'State One'})

  two: ->
    $('p').removeClass().addClass('state-two')
    window.dataLayer.push({
      'event': 'virtualPageView'
      viewName: 'View One/State Two'
      viewTitle: 'State Two'})

  three: ->
    $('p').removeClass().addClass('state-three')
    window.dataLayer.push({
      'event': 'virtualPageView'
      viewName: 'View One/State Three'
      viewTitle: 'State Three'})

  init: ->
    Backbone.history.start({root: '/view-1.html'})
