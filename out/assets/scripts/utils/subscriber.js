(function() {
  POC.utils.Subscriber = (function() {
    Subscriber.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    function Subscriber() {
      this.modelFilter = POC.models.Filter.singleton();
      this.modelGA = POC.models.GA.singleton();
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
          this.productDrill.drill(e.val);
          return console.log(this.model.getDisplayValue('product'));
        case 'ama-organization-drill':
          this.organizationDrill.drill(e.val);
          return console.log(this.model.getDisplayValue('organization'));
        case 'ama-supplier-drill':
          this.supplierDrill.drill(e.val);
          return console.log(this.model.getDisplayValue('supplier'));
      }
    };

    Subscriber.prototype.undrill = function(e) {
      switch (e.drillDown) {
        case 'ama-product-drill':
          this.productDrill.undrill();
          return console.log(this.model.getDisplayValue('product'));
        case 'ama-organization-drill':
          this.organizationDrill.undrill();
          return console.log(this.model.getDisplayValue('organization'));
        case 'ama-supplier-drill':
          this.supplierDrill.undrill();
          return console.log(this.model.getDisplayValue('supplier'));
      }
    };

    Subscriber.prototype.kpi = function(e) {
      return console.log(e.val);
    };

    Subscriber.prototype.breakout = function(e) {
      return console.log(e.val);
    };

    Subscriber.prototype.period = function(e) {
      return console.log(e.val);
    };

    return Subscriber;

  })();

}).call(this);
