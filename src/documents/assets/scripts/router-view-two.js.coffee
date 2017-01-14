POC.RouterTwo = class extends Backbone.Router

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

  two: ->
    $('p').removeClass().addClass('state-two')

  three: ->
    $('p').removeClass().addClass('state-three')

  init: ->
    Backbone.history.start({root: '/view-2.html'})
