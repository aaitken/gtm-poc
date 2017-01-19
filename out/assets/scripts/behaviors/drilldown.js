(function() {
  POC.behaviors.Drilldown = (function() {
    Drilldown.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    function Drilldown() {
      this.$listener = $('ul.vertical.menu a');
      this.init();
    }

    Drilldown.prototype.init = function() {
      var that;
      that = this;
      return this.$listener.click(function(e) {
        that.nextLevel = $(this).next()[0] || null;
        that.$levelOptions = $(this).parent().parent().find('li:gt(0)');
        that.selection = $(this).text();
        if (that.selection !== 'Back') {
          return that.drill();
        } else {
          return that["return"](e);
        }
      });
    };

    Drilldown.prototype.drill = function() {
      if (!this.nextLevel) {
        return this.$levelOptions.hide();
      }
    };

    Drilldown.prototype["return"] = function(e) {
      if (!this.$levelOptions.filter(':visible').length) {
        this.$levelOptions.show();
        return e.stopImmediatePropagation();
      }
    };

    return Drilldown;

  })();

}).call(this);
