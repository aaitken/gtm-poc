(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.NavOne = (function(superClass) {
    extend(NavOne, superClass);

    function NavOne() {
      return NavOne.__super__.constructor.apply(this, arguments);
    }

    NavOne.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    NavOne.prototype.el = '#ama-nav1';

    NavOne.prototype.events = {
      click: function(e) {
        return this.highlight(e);
      }
    };

    NavOne.prototype.highlight = function(e) {
      var $target;
      $target = $(e.target);
      if ($target.is('a')) {
        this.$el.find('a').removeClass('success');
        return $target.addClass('success');
      }
    };

    return NavOne;

  })(Backbone.View);

}).call(this);
