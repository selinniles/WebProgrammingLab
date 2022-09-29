$(document).ready(function(){

  $('#register_id').keyup(function(){  // check if the input for student id is is correct form
    var regex = /[0-9]/;
    var isValid = regex.test($('#register_id').val());
    if (isValid && $('#register_id').val().length == 10){  //if the dormat is correct
      $('#register_id').css('borderColor','green');
    }
    else {
      $('#register_id').css('borderColor','red');
    }
  });
  
  $('#register_email').keyup(function(){  // function for sign up button on the top
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (emailReg.test($('#register_email').val())){
      $('#register_email').css('borderColor','green');
    }
    else {  //if the format is wrong arrange the box and show alert message
      $('#register_email').css('borderColor','red');
    }
  });


});
