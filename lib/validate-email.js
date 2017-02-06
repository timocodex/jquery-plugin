var controller ={
  validateEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
}

var func = {
  emailVal: function(){
    $( "#target" ).keyup(function() {
      if(controller.validateEmail($(this).val())===true){
        $(this).css('border-color',"green")
      }
      else{
        $(this).css('border-color',"red")
      }
    });
  }
}
$(document).ready(func.emailVal)
