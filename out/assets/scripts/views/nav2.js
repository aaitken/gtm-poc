(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.NavTwo = (function(superClass) {
    extend(NavTwo, superClass);

    function NavTwo() {
      return NavTwo.__super__.constructor.apply(this, arguments);
    }

    NavTwo.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    NavTwo.prototype.el = '#ama-nav2';

    NavTwo.prototype.events = {
      click: function(e) {
        return this.highlight(e);
      }
    };

    NavTwo.prototype.highlight = function(e) {
      var $target;
      $target = $(e.target);
      if ($target.is('a')) {
        this.$el.find('a').removeClass('success');
        return $target.addClass('success');
      }
    };

    return NavTwo;

  })(Backbone.View);

}).call(this);
