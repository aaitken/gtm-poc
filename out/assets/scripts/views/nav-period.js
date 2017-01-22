(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.NavPeriod = (function(superClass) {
    extend(NavPeriod, superClass);

    function NavPeriod() {
      return NavPeriod.__super__.constructor.apply(this, arguments);
    }

    NavPeriod.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    NavPeriod.prototype.el = '#ama-nav-period';

    NavPeriod.prototype.events = {
      click: function(e) {
        this.highlight(e);
        return $.event.trigger({
          val: this.$el.find('.success').text(),
          kind: 'period',
          type: 'viewChange'
        });
      }
    };

    NavPeriod.prototype.highlight = function(e) {
      var $target;
      $target = $(e.target);
      if ($target.is('a')) {
        this.$el.find('a').removeClass('success');
        return $target.addClass('success');
      }
    };

    return NavPeriod;

  })(Backbone.View);

}).call(this);
