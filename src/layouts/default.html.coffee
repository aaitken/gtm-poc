--- cson

styles: [
  '/assets/styles/foundation.css'
  '/assets/styles/app.css']
scripts: [
  '/assets/scripts/jquery.js'
  '/assets/scripts/foundation.js'
  '/assets/scripts/underscore.js'
  '/assets/scripts/backbone.js'
  '/assets/scripts/namespaces.js'
  '/assets/scripts/common.js']

---

doctype 5
html ->
  head ->

    #insert styles using frontend plugin
    for url in @assets('styles')
      link rel:"stylesheet", href:url, media:"all"
  
  body ->

    text @partial 'nav-bar.html'
    div class:"content", ->
      text @content
      text @partial 'buttons.html'

    #insert script using frontend plugin
    #this picks up incrementally-named document scripts as well
    for url in @assets('scripts')
      script src:url

    text "<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W998HWG');</script>
    <!-- End Google Tag Manager -->"
