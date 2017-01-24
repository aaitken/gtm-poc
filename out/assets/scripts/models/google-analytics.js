(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.models.GoogleAnalytics = (function(superClass) {
    extend(GoogleAnalytics, superClass);

    function GoogleAnalytics() {
      return GoogleAnalytics.__super__.constructor.apply(this, arguments);
    }

    GoogleAnalytics.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    GoogleAnalytics.prototype.initialize = function() {
      return this.dataLayer = window.dataLayer;
    };

    GoogleAnalytics.prototype.defaults = {
      'Section': 'Analysis',
      'Sub-Section L1': 'Net Sales',
      'Sub-Section L2': 'Product',
      'Filter 1': '',
      'Filter 2': '',
      'Filter 3': '',
      'Period': 'YTD'
    };

    GoogleAnalytics.prototype.sendView = function() {
      return this.dataLayer.push({
        'event': 'view',
        'Section': this.get('Section'),
        'Sub-Section L1': this.get('Sub-Section L1'),
        'Sub-Section L2': this.get('Sub-Section L2')
      });
    };

    GoogleAnalytics.prototype.sendFilter = function() {
      return this.dataLayer.push({
        'event': 'filter',
        'Filter 1': this.get('Filter 1'),
        'Filter 2': this.get('Filter 2'),
        'Filter 3': this.get('Filter 3'),
        'Period': this.get('Period')
      });
    };

    return GoogleAnalytics;

  })(Backbone.Model);

}).call(this);
