(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.models.Filter = (function(superClass) {
    extend(Filter, superClass);

    function Filter() {
      return Filter.__super__.constructor.apply(this, arguments);
    }

    Filter.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    Filter.prototype.defaults = {
      section: '',
      kpi: '',
      breakout: '',
      period: '',
      product: '',
      organization: '',
      supplier: ''
    };

    return Filter;

  })(Backbone.Model);

}).call(this);
