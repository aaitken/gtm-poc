--- cson

layout: 'default'
scripts1: [
  '/assets/scripts/views/nav-one.js'
  '/assets/scripts/views/nav-two.js'
  '/assets/scripts/views/nav-three.js'
  '/assets/scripts/views/product-drill.js'
  '/assets/scripts/views/organization-drill.js'
  '/assets/scripts/views/supplier-drill.js'
  '/assets/scripts/data/drills.js'
  '/assets/scripts/behaviors/drilldown.js'
  '/assets/scripts/analysis.js']

---

div class:"row", ->
  div class:"small-12 columns", ->
    h1 "Analysis"

    p "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."

    div "#ama-nav1.button-group.large", ->
      a ".button.success", "Net Sales"
      a ".button", "Margin"
      a ".button", "Margin %"
      a ".button", "Units"

  div class:"small-9 columns", ->
      
    div "#ama-nav2.button-group.small", ->
      a ".button.success", "Product"
      a ".button", "Organization"
      a ".button", "Supplier"

  div class:"small-3 columns", ->

    div id:"ama-nav3", class:"ama-nav3 button-group small", ->
      a ".button.success", "YTD"
      a ".button", "MTD"

  div class:"small-12 columns", ->

    hr()

    a class:"button tiny", style:"border-radius:20px; background:#eee; color:#333;", "Placeholder Filter Pill"



shelves = ['Fert', 'Seed', 'Othe', 'Appl', 'Chem']
group = 1
prod = 1
sku = 1
divisions = ['C. Cornbelt Ad', 'C. Cornbelt DC', 'E. Illinois', 'N. High Plains', 'N. Illinois-Wisconsin']
branch = 1
salesman = 1
customer = 1
supplier = 1


div class:"row", ->
  div
    "data-id":"ama-drill-container",
    id:"ama-product-drill",
    class:"small-3 columns ama-drill-container ama-is-hidden", ->
      ul
        "data-id":"ama-product-drill",
        class: "vertical menu",
        "data-drilldown":"data-drilldown", ->
          for shelf in shelves
            li ->
              a href:"#", "#{shelf}"
              ul ".vertical.menu", ->
                for group in [group..group+4]
                  li ->
                    a href:"#", "Group #{group}"
                    ul ".vertical.menu", ->
                      for prod in [prod..prod+4]
                        li ->
                          a href:"#", "Product #{prod}"
                          ul ".vertical.menu", ->
                            for sku in [sku..sku+4]
                              li ->
                                a href: "#", "SKU #{sku}"

  div
    "data-id":"ama-drill-container",
    id:"ama-organization-drill",
    class:"small-3 columns ama-drill-container ama-is-hidden", ->
      ul
        "data-id":"ama-organization-drill",
        class:"vertical menu",
        "data-drilldown":"data-drilldown", ->
          for division in divisions
            li ->
              a href:"#", "#{division}"
              ul ".vertical.menu", ->
                for branch in [branch..branch+4]
                  li ->
                    a href: "#", "Branch #{branch}"
                    ul ".vertical.menu", ->
                      for salesman in [salesman..salesman+4]
                        li ->
                          a href:"#", "Salesman #{salesman}"
                          ul ".vertical.menu", ->
                            for customer in [customer..customer+4]
                              li ->
                                a href:"#", "Customer #{customer}"

  div
    "data-id":"ama-drill-container",
    id:"ama-supplier-drill",
    class:"small-3 columns ama-drill-container ama-is-hidden", ->
      ul
        "data-id":"ama-supplier-drill",
        class:"vertical menu",
        "data-drilldown":"data-drilldown", ->
          for supplier in [supplier..supplier+4]
            li ".ama-supplier", ->
              a href:"#", "Supplier #{supplier}"
              ul ".vertical.menu", ->
                li "&nbsp;"

  div class:"columns"
