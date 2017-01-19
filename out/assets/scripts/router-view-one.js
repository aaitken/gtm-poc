(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  POC.RouterOne = (function(superClass) {
    extend(_Class, superClass);

    _Class.prototype.routes = {
      '*sections': 'one'
    };

    function _Class() {
      _Class.__super__.constructor.call(this);
      this.init();
    }

    _Class.prototype.writePath = function(sections) {
      var i, len, path, ssection, ssections;
      path = '';
      ssections = sections.split('/');
      for (i = 0, len = ssections.length; i < len; i++) {
        ssection = ssections[i];
        path = path + ("/" + ssection + " ");
      }
      return $("#ama-view-name").html(path);
    };

    _Class.prototype.one = function(sections) {
      var ssections;
      ssections = sections.split('/');
      window.dataLayer.push({
        'event': 'virtualPageView',
        'viewName': ((function(_this) {
          return function() {
            var i, len, ssection;
            _this.nameString = 'Section One ';
            for (i = 0, len = ssections.length; i < len; i++) {
              ssection = ssections[i];
              _this.nameString = _this.nameString + ("/" + ssection + " ");
            }
            return _this.nameString;
          };
        })(this))(),
        'section': 'Section One',
        'subSectionL1': ssections[0],
        'subSectionL2': ssections[1],
        'subSectionL3': ssections[2],
        'subSectionL4': ssections[3],
        'subSectionL5': ssections[4],
        'subSectionL6': ssections[5],
        'viewTitle': "/Section One /" + ssections[0] + " /[Filter Combination + Period]"
      });
      return this.writePath(sections);
    };

    _Class.prototype.init = function() {
      return Backbone.history.start({
        root: '/view-1.html'
      });
    };

    return _Class;

  })(Backbone.Router);

}).call(this);
