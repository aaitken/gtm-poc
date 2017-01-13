--- cson

styles: [
  '/assets/styles/foundation.css']
scripts: [
  '/assets/scripts/jquery.js'
  '/assets/scripts/foundation.js'
  '/assets/scripts/backbone.js'
  '/assets/scripts/app.js']

---

doctype 5
html ->
  head ->
    #insert styles using frontend plugin
    for url in @assets('styles')
      link rel:"stylesheet", href:url, media:"all"
  body ->
    text @content

    #insert script using frontend plugin
    #this picks up incrementally-named document scripts as well
    for url in @assets('scripts')
      script src:url
