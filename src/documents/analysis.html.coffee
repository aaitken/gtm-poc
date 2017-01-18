--- cson

layout: 'default'
scripts1: [
  '/assets/scripts/router-view-two.js'
  '/assets/scripts/view-two.js']

---

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

h3 "[Filter]"

prod = 1
sku = 1

ul ".vertical.menu", "data-drilldown": "data-drilldown", ->

  li ->
    a href: "#ama-fert", "Fert"
    ul ".vertical.menu", ->
      for i in [1..5]
        li ->
          a href: "#ama-group-#{i}", "Group #{i}"
          ul ".vertical.menu", ->
            for prod in [prod..prod+4]
              li ->
                a href: "#ama-product-#{prod}", "Product #{prod}"
                ul ".vertical.menu", ->
                  for sku in [sku..sku+4]
                    li ->
                      a href: "#ama-sku-#{sku}", "SKU #{sku}"

  li ->
    a href: "#ama-fert", "Seed"
    ul ".vertical.menu", ->
      for i in [6..10]
        li ->
          a href: "#ama-group-#{i}", "Group #{i}"
          ul ".vertical.menu", ->
            for prod in [prod..prod+4]
              li ->
                a href: "#ama-product-#{prod}", "Product #{prod}"
                ul ".vertical.menu", ->
                  for sku in [sku..sku+4]
                    li ->
                      a href: "#ama-sku-#{sku}", "SKU #{sku}"

  li ->
    a href: "#ama-fert", "Othe"
    ul ".vertical.menu", ->
      for i in [11..15]
        li ->
          a href: "#ama-group-#{i}", "Group #{i}"
          ul ".vertical.menu", ->
            for prod in [prod..prod+4]
              li ->
                a href: "#ama-product-#{prod}", "Product #{prod}"
                ul ".vertical.menu", ->
                  for sku in [sku..sku+4]
                    li ->
                      a href: "#ama-sku-#{sku}", "SKU #{sku}"

  li ->
    a href: "#ama-fert", "Appl"
    ul ".vertical.menu", ->
      for i in [16..20]
        li ->
          a href: "#ama-group-#{i}", "Group #{i}"
          ul ".vertical.menu", ->
            for prod in [prod..prod+4]
              li ->
                a href: "#ama-product-#{prod}", "Product #{prod}"
                ul ".vertical.menu", ->
                  for sku in [sku..sku+4]
                    li ->
                      a href: "#ama-sku-#{sku}", "SKU #{sku}"

  li ->
    a href: "#ama-fert", "Chem"
    ul ".vertical.menu", ->
      for i in [21..25]
        li ->
          a href: "#ama-group-#{i}", "Group #{i}"
          ul ".vertical.menu", ->
            for prod in [prod..prod+4]
              li ->
                a href: "#ama-product-#{prod}", "Product #{prod}"
                ul ".vertical.menu", ->
                  for sku in [sku..sku+4]
                    li ->
                      a href: "#ama-sku-#{sku}", "SKU #{sku}"
