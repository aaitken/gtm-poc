(function() {
  POC.data.Drills = (function() {
    Drills.singleton = function() {
      return this.instance != null ? this.instance : this.instance = new this();
    };

    function Drills() {
      this.product = [];
      this.organization = [];
      this.supplier = [];
    }

    return Drills;

  })();

}).call(this);
