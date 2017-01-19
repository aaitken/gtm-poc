(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.NavTwo = (function(superClass) {
    extend(NavTwo, superClass);

    function NavTwo() {
      return NavTwo.__super__.constructor.apply(this, arguments);
    }

    NavTwo.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    NavTwo.prototype.el = '#ama-nav2';

    NavTwo.prototype.initialize = function() {
      this.productDrill = POC.views.ProductDrill.singleton();
      this.organizationDrill = POC.views.OrganizationDrill.singleton();
      return this.supplierDrill = POC.views.SupplierDrill.singleton();
    };

    NavTwo.prototype.events = {
      click: function(e) {
        return this.highlight(e);
      }
    };

    NavTwo.prototype.highlight = function(e) {
      var $target;
      this.$target = $target = $(e.target);
      if ($target.is('a')) {
        this.$el.find('a').removeClass('success');
        $target.addClass('success');
        return this.showDrill();
      }
    };

    NavTwo.prototype.showDrill = function() {
      this.productDrill.hide();
      this.organizationDrill.hide();
      this.supplierDrill.hide();
      switch (this.$target.text()) {
        case 'Product':
          return this.productDrill.show();
        case 'Organization':
          return this.organizationDrill.show();
        case 'Supplier':
          return this.supplierDrill.show();
      }
    };

    return NavTwo;

  })(Backbone.View);

}).call(this);
