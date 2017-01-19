(function() {
  var filters;

  POC.views.NavOne.singleton();

  POC.views.NavTwo.singleton();

  filters = [];

  $('ul.vertical.menu a').click(function(e) {
    var $catcher, $levelOptions, nextLevel, selection;
    nextLevel = $(this).next()[0] || null;
    $levelOptions = $(this).parent().parent().find('li:gt(0)');
    selection = $(this).text();
    $catcher = $('#ama-filter');
    if (selection !== 'Back') {
      filters.push(selection);
      if (!nextLevel) {
        $levelOptions.hide();
      }
      return $catcher.text(selection);
    } else {
      filters.pop();
      if (!$levelOptions.filter(':visible').length) {
        $levelOptions.show();
        e.stopImmediatePropagation();
      }
      if (filters.length !== 0) {
        return $catcher.text(filters[filters.length - 1]);
      } else {
        return $catcher.text('All');
      }
    }
  });

}).call(this);
