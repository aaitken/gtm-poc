class POC.views.FilterPill extends Backbone.View

  tagName: 'a'
  className: 'button tiny ama-filter-pill'

  setText: (val)->
    @$el.html(val)

  render: ->
    $('#ama-filter-pill-container').prepend @el
