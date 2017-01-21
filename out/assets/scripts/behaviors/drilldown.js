(function() {
  POC.behaviors.Drilldowns = (function() {
    Drilldowns.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    function Drilldowns() {
      this.$listener = $('.ama-drill-container .menu a');
      this.init();
    }

    Drilldowns.prototype.init = function() {
      var that;
      that = this;
      return this.$listener.click(function(e) {
        that.nextLevel = $(this).next()[0] || null;
        that.$levelOptions = $(this).parent().parent().find('li:gt(0)');
        that.selection = $(this).text();
        that.drillDown = $(e.target).parentsUntil('[data-id="ama-drill-container"]').find('[data-id]').eq(0).attr('data-id');
        if (that.selection !== 'Back') {
          return that.drill(e);
        } else {
          return that.undrill(e);
        }
      });
    };

    Drilldowns.prototype.drill = function(e) {
      $.event.trigger({
        val: $(e.target).text(),
        drillDown: this.drillDown,
        kind: 'drill',
        type: 'viewChange'
      });
      if (!this.nextLevel) {
        return this.$levelOptions.hide();
      }
    };

    Drilldowns.prototype.undrill = function(e) {
      $.event.trigger({
        drillDown: this.drillDown,
        kind: 'undrill',
        type: 'viewChange'
      });
      if (!this.$levelOptions.filter(':visible').length) {
        e.stopImmediatePropagation();
        return this.$levelOptions.show();
      }
    };

    return Drilldowns;

  })();

}).call(this);
