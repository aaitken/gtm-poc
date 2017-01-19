class POC.views.OrganizationDrill extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-organization-drill'

  hide: ->
    @$el.addClass('ama-is-hidden')

  show: ->
    @$el.removeClass('ama-is-hidden')
