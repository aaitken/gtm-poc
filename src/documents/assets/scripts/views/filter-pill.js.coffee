class POC.views.FilterPill extends Backbone.View

  tagName: 'a'
  className: 'button tiny ama-filter-pill'

  initialize: ->
    @render()
  
  render: ->
    @$el.html('Test')
    $('#ama-filter-pill-container').html @el
