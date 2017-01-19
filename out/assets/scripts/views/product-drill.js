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
      $(document).on('drill', (function(_this) {
        return function(e) {
          return _this.updateData(e);
        };
      })(this));
      return $(document).on('undrill', (function(_this) {
        return function(e) {
          return _this.updateData(e);
        };
      })(this));
    };

    ProductDrill.prototype.hide = function() {
      return this.$el.addClass('ama-is-hidden');
    };

    ProductDrill.prototype.show = function() {
      return this.$el.removeClass('ama-is-hidden');
    };

    ProductDrill.prototype.updateData = function(e) {
      return console.log(e);
    };

    return ProductDrill;

  })(Backbone.View);

}).call(this);