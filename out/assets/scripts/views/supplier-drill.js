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

    SupplierDrill.prototype.initialize = function() {
      this.model = POC.models.Filter.singleton();
      this.filterPlaceholder = POC.views.FilterPlaceholder.singleton();
      this.FilterPill = POC.views.FilterPill;
      return this.subscribe();
    };

    SupplierDrill.prototype.subscribe = function() {
      $(document).on('drill', (function(_this) {
        return function(e) {
          if (e.drillDown === 'ama-supplier-drill') {
            _this.filter(e.value);
            _this.pillify();
            return _this.filterPlaceholder.hide();
          }
        };
      })(this));
      return $(document).on('undrill', (function(_this) {
        return function(e) {
          if (e.drillDown === 'ama-supplier-drill') {
            _this.unfilter();
            _this.pillify();
            if (!$('.ama-filter-pill').length) {
              return _this.filterPlaceholder.show();
            }
          }
        };
      })(this));
    };

    SupplierDrill.prototype.hide = function() {
      return this.$el.addClass('ama-is-hidden');
    };

    SupplierDrill.prototype.show = function() {
      return this.$el.removeClass('ama-is-hidden');
    };

    SupplierDrill.prototype.filter = function(val) {
      var currentSupplier;
      currentSupplier = this.model.get('supplier');
      if (currentSupplier === '') {
        return this.model.set('supplier', val);
      } else {
        return this.model.set('supplier', currentSupplier + "," + val);
      }
    };

    SupplierDrill.prototype.unfilter = function() {
      var currentSupplier;
      currentSupplier = this.model.get('supplier');
      currentSupplier = currentSupplier.replace(/,*[^,]+$/g, '');
      return this.model.set('supplier', currentSupplier);
    };

    SupplierDrill.prototype.pillify = function() {
      var pillText;
      pillText = this.model.getDisplayValue('supplier');
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

    return SupplierDrill;

  })(Backbone.View);

}).call(this);
