(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.FilterPlaceholder = (function(superClass) {
    extend(FilterPlaceholder, superClass);

    function FilterPlaceholder() {
      return FilterPlaceholder.__super__.constructor.apply(this, arguments);
    }

    FilterPlaceholder.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    FilterPlaceholder.prototype.el = '#ama-filter-placeholder';

    FilterPlaceholder.prototype.hide = function() {
      return this.$el.addClass('ama-is-hidden');
    };

    FilterPlaceholder.prototype.show = function() {
      return this.$el.removeClass('ama-is-hidden');
    };

    return FilterPlaceholder;

  })(Backbone.View);

}).call(this);
