(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.NavKPI = (function(superClass) {
    extend(NavKPI, superClass);

    function NavKPI() {
      return NavKPI.__super__.constructor.apply(this, arguments);
    }

    NavKPI.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    NavKPI.prototype.el = '#ama-nav-kpi';

    NavKPI.prototype.events = {
      click: function(e) {
        return this.highlight(e);
      }
    };

    NavKPI.prototype.highlight = function(e) {
      var $target;
      $target = $(e.target);
      if ($target.is('a')) {
        this.$el.find('a').removeClass('success');
        return $target.addClass('success');
      }
    };

    return NavKPI;

  })(Backbone.View);

}).call(this);
