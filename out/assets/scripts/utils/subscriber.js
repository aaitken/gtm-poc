(function() {
  POC.utils.Subscriber = (function() {
    Subscriber.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    function Subscriber() {
      this.modelFilter = POC.models.Filter.singleton();
      this.modelGA = POC.models.GoogleAnalytics.singleton();
      this.productDrill = POC.views.ProductDrill.singleton();
      this.organizationDrill = POC.views.OrganizationDrill.singleton();
      this.supplierDrill = POC.views.SupplierDrill.singleton();
      this.listen();
    }

    Subscriber.prototype.listen = function() {
      return $(document).on('viewChange', (function(_this) {
        return function(e) {
          switch (e.kind) {
            case 'drill':
              _this.drill(e);
              break;
            case 'undrill':
              _this.undrill(e);
              break;
            case 'kpi':
              _this.kpi(e);
              break;
            case 'breakout':
              _this.breakout(e);
              break;
            case 'period':
              _this.period(e);
          }
          return console.log(_this.modelGA.attributes);
        };
      })(this));
    };

    Subscriber.prototype.drill = function(e) {
      switch (e.drillDown) {
        case 'ama-product-drill':
          this.productDrill.drill(e.val);
          return this.setGAFilter('Filter 1', 'product');
        case 'ama-organization-drill':
          this.organizationDrill.drill(e.val);
          return this.setGAFilter('Filter 2', 'organization');
        case 'ama-supplier-drill':
          this.supplierDrill.drill(e.val);
          return this.setGAFilter('Filter 3', 'supplier');
      }
    };

    Subscriber.prototype.undrill = function(e) {
      switch (e.drillDown) {
        case 'ama-product-drill':
          this.productDrill.undrill();
          return this.setGAFilter('Filter 1', 'product');
        case 'ama-organization-drill':
          this.organizationDrill.undrill();
          return this.setGAFilter('Filter 2', 'organization');
        case 'ama-supplier-drill':
          this.supplierDrill.undrill();
          return this.setGAFilter('Filter 3', 'supplier');
      }
    };

    Subscriber.prototype.setGAFilter = function(key, filterDimension) {
      return this.modelGA.set(key, this.modelFilter.getDisplayValue(filterDimension));
    };

    Subscriber.prototype.kpi = function(e) {
      return this.modelGA.set('Sub-Section L1', e.val);
    };

    Subscriber.prototype.breakout = function(e) {
      return this.modelGA.set('Sub-Section L2', e.val);
    };

    Subscriber.prototype.period = function(e) {
      return this.modelGA.set('Period', e.val);
    };

    return Subscriber;

  })();

}).call(this);
