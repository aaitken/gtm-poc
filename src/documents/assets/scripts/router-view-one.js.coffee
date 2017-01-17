POC.RouterOne = class extends Backbone.Router

  routes: {
    '*sections': 'one'
  }

  constructor: ->
    super()
    @init()


  writePath: (sections)->
    path = ''
    ssections = sections.split('/')
    for ssection in ssections
      path = path + "/#{ssection} "
    $("#ama-view-name").html(path)
    

  one: (sections)->
    ssections = sections.split('/')
    window.dataLayer.push({
      'event': 'virtualPageView'
      'viewName': (=>
        @nameString = 'Section One '
        for ssection in ssections
          @nameString = @nameString + "/#{ssection} "
        console.log @nameString
        return @nameString)()
      'section': 'Section One'
      'subSectionL1': ssections[0]
      'subSectionL2': ssections[1]
      'subSectionL3': ssections[2]
      'subSectionL4': ssections[3]
      'subSectionL5': ssections[4]
      'subSectionL6': ssections[5]
      'viewTitle': "/Section One /#{ssections[0]} /[Filter Combination + Period]"})
    @writePath(sections)


  init: ->
    Backbone.history.start({root: '/view-1.html'})
