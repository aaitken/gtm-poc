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
        var $target;
        $target = $(e.target);
        if ($target.is('a')) {
          this.currentUser = $target.text();
          this.setId();
          $.event.trigger({
            val: this.currentUser,
            id: this.currentId,
            type: 'userChange'
          });
          return this.update();
        }
      }
    };

    NavUser.prototype.setId = function() {
      var ids;
      switch (this.currentUser) {
        case 'Region Manager':
          ids = ['12222', '13333', '14444', '15555', '16666'];
          break;
        case 'Division Manager':
          ids = ['22222', '23333', '24444', '25555', '26666'];
          break;
        case 'Area Manager':
          ids = ['32222', '33333', '34444', '35555', '36666'];
          break;
        case 'Branch Manager':
          ids = ['42222', '43333', '44444', '45555', '46666'];
      }
      return this.currentId = ids[Math.floor(Math.random() * ids.length)];
    };

    NavUser.prototype.update = function() {
      return this.$el.find('a').eq(0).text(this.currentUser);
    };

    return NavUser;

  })(Backbone.View);

}).call(this);
