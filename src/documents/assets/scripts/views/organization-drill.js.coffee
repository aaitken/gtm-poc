class POC.views.OrganizationDrill extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-organization-drill'
  initialize: ->
    @model = POC.models.Filter.singleton()
    @filterPlaceholder = POC.views.FilterPlaceholder.singleton()
    @FilterPill = POC.views.FilterPill

  drill: (val)->
    @filter(val)
    @pillify()
    @filterPlaceholder.hide()
    
  undrill: ->
    @unfilter()
    @pillify()
    if ! $('.ama-filter-pill').length
      @filterPlaceholder.show()

  hide: ->
    @$el.addClass('ama-is-hidden')

  show: ->
    @$el.removeClass('ama-is-hidden')
  
  filter: (val)->
    currentOrganization =  @model.get('organization')
    if currentOrganization is ''
      @model.set('organization', val)
    else
      @model.set('organization', "#{currentOrganization},#{val}")

  unfilter: ->
    currentOrganization = @model.get('organization')
    currentOrganization = currentOrganization.replace(/,*[^,]+$/g, '')
    @model.set('organization', currentOrganization)

  pillify: ->
    pillText = @model.getDisplayValue('organization')
    if ! @filterPill
      @filterPill = new @FilterPill()
      @filterPill.render()
      @filterPill.setText(pillText)
    else if pillText is ''
      @filterPill.remove()
      @filterPill = null
    else
      @filterPill.setText(pillText)

