(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.FilterPill = (function(superClass) {
    extend(FilterPill, superClass);

    function FilterPill() {
      return FilterPill.__super__.constructor.apply(this, arguments);
    }

    FilterPill.prototype.tagName = 'a';

    FilterPill.prototype.className = 'button tiny ama-filter-pill';

    FilterPill.prototype.setText = function(val) {
      return this.$el.html(val);
    };

    FilterPill.prototype.render = function() {
      return $('#ama-filter-pill-container').prepend(this.el);
    };

    return FilterPill;

  })(Backbone.View);

}).call(this);
