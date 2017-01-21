(function() {
  POC.utils.Subscriber = (function() {
    Subscriber.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    function Subscriber() {
      this.model = POC.models.Filter.singleton();
      this.productDrill = POC.views.ProductDrill.singleton();
      this.organizationDrill = POC.views.OrganizationDrill.singleton();
      this.supplierDrill = POC.views.SupplierDrill.singleton();
      this.listen();
    }

    Subscriber.prototype.listen = function() {
      return $(document).on('viewChange', (function(_this) {
        return function(e) {
          console.log(e.val);
          switch (e.kind) {
            case 'drill':
              return _this.drill(e);
            case 'undrill':
              return _this.undrill(e);
          }
        };
      })(this));
    };

    Subscriber.prototype.drill = function(e) {
      switch (e.drillDown) {
        case 'ama-product-drill':
          return this.productDrill.drill(e.val);
        case 'ama-organization-drill':
          return this.organizationDrill.drill(e.val);
        case 'ama-supplier-drill':
          return this.supplierDrill.drill(e.val);
      }
    };

    Subscriber.prototype.undrill = function(e) {
      switch (e.drillDown) {
        case 'ama-product-drill':
          return this.productDrill.undrill();
        case 'ama-organization-drill':
          return this.organizationDrill.undrill();
        case 'ama-supplier-drill':
          return this.supplierDrill.undrill();
      }
    };

    return Subscriber;

  })();

}).call(this);
