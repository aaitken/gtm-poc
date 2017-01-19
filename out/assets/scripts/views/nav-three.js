(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.NavThree = (function(superClass) {
    extend(NavThree, superClass);

    function NavThree() {
      return NavThree.__super__.constructor.apply(this, arguments);
    }

    NavThree.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    NavThree.prototype.el = '#ama-nav3';

    NavThree.prototype.events = {
      click: function(e) {
        return this.highlight(e);
      }
    };

    NavThree.prototype.highlight = function(e) {
      var $target;
      $target = $(e.target);
      if ($target.is('a')) {
        this.$el.find('a').removeClass('success');
        return $target.addClass('success');
      }
    };

    return NavThree;

  })(Backbone.View);

}).call(this);
