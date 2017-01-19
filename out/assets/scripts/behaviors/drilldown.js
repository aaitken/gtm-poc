(function() {
  POC.behaviors.Drilldowns = (function() {
    Drilldowns.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    function Drilldowns() {
      this.$listener = $('ul.vertical.menu a');
      this.init();
    }

    Drilldowns.prototype.init = function() {
      var that;
      that = this;
      return this.$listener.click(function(e) {
        alert('in');
        that.nextLevel = $(this).next()[0] || null;
        that.$levelOptions = $(this).parent().parent().find('li:gt(0)');
        that.selection = $(this).text();
        that.drillDown = $(e.target).parentsUntil('ul[data-drilldown]').find('a').eq(0).attr('data-id');
        if (that.selection !== 'Back') {
          return that.drill(e);
        } else {
          return that.undrill(e);
        }
      });
    };

    Drilldowns.prototype.drill = function(e) {
      $.event.trigger({
        anchor: e.target,
        drillDown: this.drillDown,
        type: 'drill'
      });
      if (!this.nextLevel) {
        return this.$levelOptions.hide();
      }
    };

    Drilldowns.prototype.undrill = function(e) {
      $.event.trigger({
        drillDown: this.drillDown,
        type: 'undrill'
      });
      if (!this.$levelOptions.filter(':visible').length) {
        e.stopImmediatePropagation();
        return this.$levelOptions.show();
      }
    };

    return Drilldowns;

  })();

}).call(this);
