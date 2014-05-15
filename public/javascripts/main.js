$(document).ready(function(){
  $.get('/api/users', function(serverResponse, req, res){
    console.log(serverResponse);
    console.log(req);
    console.log(res);
  })
});