(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.RouterThree = (function(superClass) {
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
      return $('p').removeClass().addClass('state-one');
    };

    _Class.prototype.two = function() {
      return $('p').removeClass().addClass('state-two');
    };

    _Class.prototype.three = function() {
      return $('p').removeClass().addClass('state-three');
    };

    _Class.prototype.init = function() {
      return Backbone.history.start({
        root: '/view-3.html'
      });
    };

    return _Class;

  })(Backbone.Router);

}).call(this);
