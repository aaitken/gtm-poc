class POC.views.NavUser extends Backbone.View

  @singleton = ->
    @instance ?= new this()

  el: '#ama-nav-user'

  events:
    click: (e)->
      $target = $(e.target)
      if $target.is('a')
        @currentUser = $target.text()
        @setId()
        $.event.trigger({
          val: @currentUser
          id: @currentId
          type: 'userChange'})
        @update()

  setId: ->
    switch @currentUser
      when 'Region Manager'
        ids = ['12222', '13333', '14444', '15555', '16666']
      when 'Division Manager'
        ids = ['22222', '23333', '24444', '25555', '26666']
      when 'Area Manager'
        ids = ['32222', '33333', '34444', '35555', '36666']
      when 'Branch Manager'
        ids = ['42222', '43333', '44444', '45555', '46666']
    @currentId = ids[Math.floor(Math.random() * ids.length)]

  update: ->
    @$el.find('a').eq(0).text @currentUser
