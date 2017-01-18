--- cson

layout: 'default'
scripts1: [
  '/assets/scripts/analysis.js']

---

div class:"row", ->
  div class:"small-12 columns", ->
    h1 "Analysis"

    p "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."

    div ".button-group.large", ->
      a ".button.success", "Net Sales"
      a ".button", "Margin"
      a ".button", "Margin %"
      a ".button", "Units"
      
    div ".button-group.small", ->
      a ".button", "Product"
      a ".button", "Organization"
      a ".button", "Supplier"

    h3 id:"ama-filter", "[Filter]"



shelves = ['Fert', 'Seed', 'Othe', 'Appl', 'Chem']
group = 1
prod = 1
sku = 1

div class:"row", ->
  div class:"small-3 columns",  style:"border: 1px solid #777", ->
    ul ".vertical.menu", "data-drilldown": "data-drilldown", ->
    #ul ".vertical.menu", ->
      for shelf in shelves
        li ->
          a href: "#ama-#{shelf.toLowerCase()}", "#{shelf}"
          ul ".vertical.menu", ->
            for group in [group..group+4]
              li ->
                a href: "#ama-group-#{group}", "Group #{group}"
                ul ".vertical.menu", ->
                  for prod in [prod..prod+4]
                    li ->
                      a href: "#ama-product-#{prod}", "Product #{prod}"
                      ul ".vertical.menu", ->
                        for sku in [sku..sku+4]
                          li ->
                            a href: "#ama-sku-#{sku}", "SKU #{sku}"
