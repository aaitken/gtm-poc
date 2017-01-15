(function() {
  window.dataLayer = [
    {
      userType: 'Division Manager'
    }
  ];

  $(document).foundation();

  $("#ama-user-type").html(window.dataLayer[0].userType);

}).call(this);
