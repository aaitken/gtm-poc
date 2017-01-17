window.dataLayer = [
  #{userType: 'Region Manager'}
  #{userType: 'Division Manager'}
  #{userType: 'Area Manager'}
  {userType: 'Branch Manager'}
  ]
  
#-----
#
$(document).foundation()
$("#ama-user-type").html(window.dataLayer[0].userType)
