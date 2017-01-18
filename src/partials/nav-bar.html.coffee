div "#example-menu.top-bar", ->
  div class:"row", ->
    div class:" small-12 columns", ->
      div ".top-bar-left", ->
        ul ".dropdown.menu", "data-dropdown-menu": "data-dropdown-menu", ->
          li ".menu-text", "GTM POC"
          li ->
            a href: "dashboard.html", "Dashboard"
          li ->
            a href: "analysis.html", "Analysis"
          li ->
            a href: "comparisons.html", "Comparisons"
          li ->
            a href: "settings.html", "Settings"
      div ".top-bar-right", ->
        ul ".menu", ->
          li id:"#ama-user-type", class:".menu-text .ama-user-type"
