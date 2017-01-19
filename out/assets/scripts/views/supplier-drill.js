(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.SupplierDrill = (function(superClass) {
    extend(SupplierDrill, superClass);

    function SupplierDrill() {
      return SupplierDrill.__super__.constructor.apply(this, arguments);
    }

    SupplierDrill.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    SupplierDrill.prototype.el = '#ama-supplier-drill';

    SupplierDrill.prototype.hide = function() {
      return this.$el.addClass('ama-is-hidden');
    };

    SupplierDrill.prototype.show = function() {
      return this.$el.removeClass('ama-is-hidden');
    };

    return SupplierDrill;

  })(Backbone.View);

}).call(this);
