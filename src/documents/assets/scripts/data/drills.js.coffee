class POC.data.Drills

  @singleton = ->
    @instance ?= new this()

  constructor: ->
    @product = []
    @organization = []
    @supplier = []
