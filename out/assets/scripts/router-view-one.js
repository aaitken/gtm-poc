(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.RouterOne = (function(superClass) {
    extend(_Class, superClass);

    _Class.prototype.routes = {
      'state-one': 'one',
      'state-two': 'two',
      'state-three': 'three',
      '*notFound': 'notFound'
    };

    function _Class() {
      _Class.__super__.constructor.call(this);
      this.init();
    }

    _Class.prototype.one = function() {
      $('p').removeClass().addClass('state-one');
      return window.dataLayer.push({
        'event': 'virtualPageView',
        viewName: 'View One/State One',
        viewTitle: 'State One'
      });
    };

    _Class.prototype.two = function() {
      $('p').removeClass().addClass('state-two');
      return window.dataLayer.push({
        'event': 'virtualPageView',
        viewName: 'View One/State Two',
        viewTitle: 'State Two'
      });
    };

    _Class.prototype.three = function() {
      $('p').removeClass().addClass('state-three');
      return window.dataLayer.push({
        'event': 'virtualPageView',
        viewName: 'View One/State Three',
        viewTitle: 'State Three'
      });
    };

    _Class.prototype.init = function() {
      return Backbone.history.start({
        root: '/view-1.html'
      });
    };

    return _Class;

  })(Backbone.Router);

}).call(this);
