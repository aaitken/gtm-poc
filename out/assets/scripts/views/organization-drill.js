(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.views.OrganizationDrill = (function(superClass) {
    extend(OrganizationDrill, superClass);

    function OrganizationDrill() {
      return OrganizationDrill.__super__.constructor.apply(this, arguments);
    }

    OrganizationDrill.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    OrganizationDrill.prototype.el = '#ama-organization-drill';

    OrganizationDrill.prototype.hide = function() {
      return this.$el.addClass('ama-is-hidden');
    };

    OrganizationDrill.prototype.show = function() {
      return this.$el.removeClass('ama-is-hidden');
    };

    return OrganizationDrill;

  })(Backbone.View);

}).call(this);
