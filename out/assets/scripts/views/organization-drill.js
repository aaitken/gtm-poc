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

    OrganizationDrill.prototype.initialize = function() {
      this.model = POC.models.Filter.singleton();
      this.filterPlaceholder = POC.views.FilterPlaceholder.singleton();
      return this.FilterPill = POC.views.FilterPill;
    };

    OrganizationDrill.prototype.drill = function(val) {
      this.filter(val);
      this.pillify();
      return this.filterPlaceholder.hide();
    };

    OrganizationDrill.prototype.undrill = function() {
      this.unfilter();
      this.pillify();
      if (!$('.ama-filter-pill').length) {
        return this.filterPlaceholder.show();
      }
    };

    OrganizationDrill.prototype.hide = function() {
      return this.$el.addClass('ama-is-hidden');
    };

    OrganizationDrill.prototype.show = function() {
      return this.$el.removeClass('ama-is-hidden');
    };

    OrganizationDrill.prototype.filter = function(val) {
      var currentOrganization;
      currentOrganization = this.model.get('organization');
      if (currentOrganization === '') {
        return this.model.set('organization', val);
      } else {
        return this.model.set('organization', currentOrganization + "," + val);
      }
    };

    OrganizationDrill.prototype.unfilter = function() {
      var currentOrganization;
      currentOrganization = this.model.get('organization');
      currentOrganization = currentOrganization.replace(/,*[^,]+$/g, '');
      return this.model.set('organization', currentOrganization);
    };

    OrganizationDrill.prototype.pillify = function() {
      var pillText;
      pillText = this.model.getDisplayValue('organization');
      if (!this.filterPill) {
        this.filterPill = new this.FilterPill();
        this.filterPill.render();
        return this.filterPill.setText(pillText);
      } else if (pillText === '') {
        this.filterPill.remove();
        return this.filterPill = null;
      } else {
        return this.filterPill.setText(pillText);
      }
    };

    return OrganizationDrill;

  })(Backbone.View);

}).call(this);
