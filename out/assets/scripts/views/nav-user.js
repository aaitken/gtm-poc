(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.NavUser = (function(superClass) {
    extend(NavUser, superClass);

    function NavUser() {
      return NavUser.__super__.constructor.apply(this, arguments);
    }

    NavUser.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    NavUser.prototype.el = '#ama-nav-user';

    NavUser.prototype.events = {
      click: function(e) {
        return this.update(e);
      }
    };

    NavUser.prototype.update = function(e) {
      var $target;
      $target = $(e.target);
      if ($target.is('a')) {
        return this.$el.find('a').eq(0).text($target.text());
      }
    };

    return NavUser;

  })(Backbone.View);

}).call(this);
