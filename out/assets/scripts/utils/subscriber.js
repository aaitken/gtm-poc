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
      this.filterEvent = null;
      this.listen();
    }

    Subscriber.prototype.listen = function() {
      return $(document).on('viewChange', (function(_this) {
        return function(e) {
          switch (e.kind) {
            case 'drill':
              return _this.drill(e);
            case 'undrill':
              return _this.undrill(e);
            case 'kpi':
              return _this.kpi(e);
            case 'breakout':
              return _this.breakout(e);
            case 'period':
              return _this.period(e);
          }
        };
      })(this));
    };

    Subscriber.prototype.drill = function(e) {
      switch (e.drillDown) {
        case 'ama-product-drill':
          this.filterEvent = 'Product';
          this.productDrill.drill(e.val);
          return this.setGAFilter('Filter 1', 'product');
        case 'ama-organization-drill':
          this.filterEvent = 'Organization';
          this.organizationDrill.drill(e.val);
          return this.setGAFilter('Filter 2', 'organization');
        case 'ama-supplier-drill':
          this.filterEvent = 'Supplier';
          this.supplierDrill.drill(e.val);
          return this.setGAFilter('Filter 3', 'supplier');
      }
    };

    Subscriber.prototype.undrill = function(e) {
      switch (e.drillDown) {
        case 'ama-product-drill':
          this.filterEvent = 'Product';
          this.productDrill.undrill();
          return this.setGAFilter('Filter 1', 'product');
        case 'ama-organization-drill':
          this.filterEvent = 'Organization';
          this.organizationDrill.undrill();
          return this.setGAFilter('Filter 2', 'organization');
        case 'ama-supplier-drill':
          this.filterEvent = 'Supplier';
          this.supplierDrill.undrill();
          return this.setGAFilter('Filter 3', 'supplier');
      }
    };

    Subscriber.prototype.setGAFilter = function(key, filterDimension) {
      this.modelGA.set(key, this.modelFilter.getDisplayValue(filterDimension));
      return this.modelGA.sendFilter(this.filterEvent);
    };

    Subscriber.prototype.kpi = function(e) {
      this.modelGA.set('Sub-Section L1', e.val);
      return this.modelGA.sendView();
    };

    Subscriber.prototype.breakout = function(e) {
      this.modelGA.set('Sub-Section L2', e.val);
      return this.modelGA.sendView();
    };

    Subscriber.prototype.period = function(e) {
      this.filterEvent = 'Period';
      this.modelGA.set('Period', e.val);
      return this.modelGA.sendFilter(this.filterEvent);
    };

    return Subscriber;

  })();

}).call(this);
