(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.ProductDrill = (function(superClass) {
    extend(ProductDrill, superClass);

    function ProductDrill() {
      return ProductDrill.__super__.constructor.apply(this, arguments);
    }

    ProductDrill.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    ProductDrill.prototype.el = '#ama-product-drill';

    ProductDrill.prototype.initialize = function() {
      this.model = POC.models.Filter.singleton();
      this.filterPlaceholder = POC.views.FilterPlaceholder.singleton();
      return this.FilterPill = POC.views.FilterPill;
    };

    ProductDrill.prototype.drill = function(val) {
      this.filter(val);
      this.pillify();
      return this.filterPlaceholder.hide();
    };

    ProductDrill.prototype.undrill = function() {
      this.unfilter();
      this.pillify();
      if (!$('.ama-filter-pill').length) {
        return this.filterPlaceholder.show();
      }
    };

    ProductDrill.prototype.hide = function() {
      return this.$el.addClass('ama-is-hidden');
    };

    ProductDrill.prototype.show = function() {
      return this.$el.removeClass('ama-is-hidden');
    };

    ProductDrill.prototype.filter = function(val) {
      var currentProduct;
      currentProduct = this.model.get('product');
      if (currentProduct === '') {
        return this.model.set('product', val);
      } else {
        return this.model.set('product', currentProduct + "," + val);
      }
    };

    ProductDrill.prototype.unfilter = function() {
      var currentProduct;
      currentProduct = this.model.get('product');
      currentProduct = currentProduct.replace(/,*[^,]+$/g, '');
      return this.model.set('product', currentProduct);
    };

    ProductDrill.prototype.pillify = function() {
      var pillText;
      pillText = this.model.getDisplayValue('product');
      if (!this.filterPill) {
        this.filterPill = new this.FilterPill();
        this.filterPill.render();
        return this.filterPill.setText(pillText);
      } else if (pillText === '') {
        this.filterPill.remove();
        return this.filterPill = null;
      } else {
        return this.filterPill.setText(pillText);
      }
    };

    return ProductDrill;

  })(Backbone.View);

}).call(this);
