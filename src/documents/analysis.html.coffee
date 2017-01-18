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
      a ".button.success", "Product"
      a ".button", "Organization"
      a ".button", "Supplier"

    h3 id:"ama-filter", "[Filter]"



shelves = ['Fert', 'Seed', 'Othe', 'Appl', 'Chem']
group = 1
prod = 1
sku = 1
divisions = ['C. Cornbelt Ad', 'C. Cornbelt DC', 'E. Illinois', 'N. High Plains', 'N. Illinois-Wisconsin']
branch = 1
salesman = 1
customer = 1
supplier = 1


div id:"ama-shelf-drill", class:"row", ->
  div class:"small-3 columns",  style:"border: 1px solid #777", ->
    ul ".vertical.menu", "data-drilldown": "data-drilldown", ->
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

div id:"ama-org-drill", class:"ama-is-hidden row", ->
  div class:"small-3 columns",  style:"border: 1px solid #777", ->
    ul ".vertical.menu", "data-drilldown": "data-drilldown", ->
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
                            a href:"#", "SKU #{customer}"

div id:"ama-supplier-drill", class:"ama-is-hidden row", ->
  div class:"small-3 columns",  style:"border: 1px solid #777", ->
    ul ".vertical.menu", "data-drilldown": "data-drilldown", "data-animation-duration":0, ->
      for supplier in [supplier..supplier+4]
        li ".ama-supplier", ->
          a href:"#", "Supplier #{supplier}"
          ul ".vertical.menu", ->
            li "&nbsp;"
