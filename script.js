$(document).ready(function () {
    $('#submitbtn').click(function () {
        let email = $('#inputEmail').val();
        if (email == '') {
            $('#emailError').html("<p class='text-danger'>Please Enter Email Address</p>");
            $('#inputEmail').addClass('error-box').focus();
        }
    })

    $('.form-control').keyup(function () {
        if ($('.form-control').hasClass('error-box')) {
            $('#emailError').html('');
            $('.form-control').removeClass('error-box');
        }
    })
    $("#inputEmail").keyup(function () {
        if (validateEmail()) {
           
            $("#inputEmail").addClass('green-box');
          
            $("#emailError").html("<p class='text-success'>Valid Email Address</p>");
        } else {
            
            $("#inputEmail").addClass('error-box');
            $("#emailError").html("<p class='text-danger'>Enter valid Email address</p>");
        }

    })




    $('#submitbtn').click(function () {
        let password = $('#inputPassword').val();
        if (password == '') {
            $('#passwordError').html("<p class='text-danger'>Please Enter a Password</p>");
            $('#inputPassword').addClass('error-box')
        }
    })

    // $('.form-control').keyup(function () {
    //     if ($('.form-control').hasClass('error-box')) {
    //         $('#passwordError').html('');
    //         $('.form-control').removeClass('error-box');
    //     }
    // })
    $("#inputPassword").keyup(function () {
        if (validatePassword()) {
           
            $("#inputPassword").addClass('green-box');
          
            $("#passwordError").html("<p class='text-success'>Password Strength : Strong</p>");
        } else {
          
            $("#inputPassword").addClass('error-box');
            $("#passwordError").html("<p class='text-danger'>Password must contain eight characters , atleast one letter and one number</p>");
        }

    })

})

function validateEmail() {

    let  email1 = $("#inputEmail").val();
    
    let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email1)) {
        return true;
    } else {
        return false;
    }
}

function validatePassword() {
   
    let pass = $("#inputPassword").val();
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

   
    if (reg.test(pass)) {
        return true;
    } else {
        return false;
    }

}

