$(document).ready(function(){
    $('#formSignUp').submit(function(){
          var res=true;
          if($('#studentRadio').is(':checked')){
            if(!testName($('#inputName').val())){
                res=false;
                $('#errName').css('display','block');
                $('#inputName').addClass("errClass");
            }
            else{
                $('#errName').css('display','none');
                $('#inputName').removeClass("errClass");
            }
            if(!testSurname($('#inputSurname').val())){
                res=false;
                $('#errSurname').css('display','block');
                $('#inputSurname').addClass("errClass");
            }
            else{
                $('#errSurname').css('display','none');
                $('#inputSurname').removeClass("errClass");
            }
            if(!testEmailStudent()){
                res=false;
                $('#errEmail').css('display','block');
                $('#inputEmail').addClass("errClass");
            }
            else{
                $('#errEmail').css('display','none');
                $('#inputEmail').removeClass("errClass");
            }
            if(!testMatricola()){
                res=false;
                $('#errMatricola').css('display','block');
                $('#inputMatricola').addClass("errClass");
            }
            else{
                $('#errMatricola').css('display','none');
                $('#inputMatricola').removeClass("errClass");
            }
            if(!testCitta()){
                res=false;
                $('#errCity').css('display','block');
                $('#inputCity').addClass("errClass");
            }
            else{
                $('#errCity').css('display','none');
                $('#inputCity').removeClass("errClass");
            }
            if(!testIndirizzo()){
                res=false;
                $('#errAddress').css('display','block');
                $('#inputAddress').addClass("errClass");
            }
            else{
                $('#errAddress').css('display','none');
                $('#inputAddress').removeClass("errClass");
            }
            if(!testCorso()){
                res=false;
                $('#errCourse').css('display','block');
                $('#inputCourse').addClass("errClass");
            }
            else{
                $('#errCourse').css('display','none');
                $('#inputCourse').removeClass("errClass");
            }
        }
        else if($('#tutorAccRadio').is(':checked')){
            if(!testName($('#inputNameT').val())){
                res=false;
                $('#errNameT').css('display','block');
                $('#inputNameT').addClass("errClass");
            }
            else{
                $('#errNameT').css('display','none');
                $('#inputNameT').removeClass("errClass");
            }
            if(!testSurname($('#inputSurnameT').val())){
                res=false;
                $('#errSurnameT').css('display','block');
                $('#inputSurnameT').addClass("errClass");
            }
            else{
                $('#errSurnameT').css('display','none');
                $('#inputSurnameT').removeClass("errClass");
            }
            if(!testEmailTutor()){
                res=false;
                $('#errEmailT').css('display','block');
                $('#inputEmailT').addClass("errClass");
            }   
            else{
                $('#errEmailT').css('display','none');
                $('#inputEmailT').removeClass("errClass");
            }
            if(!testDepartment()){
                res=false;
                $('#errDepartmentT').css('display','block');
                $('#inputDepartmentT').addClass("errClass");
            }
            else{
                $('#errDepartmentT').css('display','none');
                $('#inputDepartmentT').removeClass("errClass");
            }
        }
        if(!testPassword()){
            res=false;
            $('#errPassword').css('display','block');
            $('#inputPassword').addClass("errClass");
        }
        else{
            $('#errPassword').css('display','none');
            $('#inputPassword').removeClass("errClass");
        }
        if(!testConfirmPassword()){
            res=false;
            $('#errConfirmPassword').css('display','block');
            $('#inputConfirmPassword').addClass("errClass");
        }
        else{
            $('#errConfirmPassword').css('display','none');
            $('#inputConfirmPassword').removeClass("errClass");
        }
        return res;
    });
});

function testName(name){
    if(name.length>=2){
        var exp= new RegExp("^[A-Za-z]+$");
        if(exp.test(name))  return true;
    }
    return false;
}

function testSurname(surname){
    if(surname.length>=2){
        var exp= new RegExp("^[A-Za-z]+$");
        if(exp.test(surname))   return true;
    }
    return false;
}

function testEmailStudent(){
    var email= $('#inputEmail').val().toLowerCase();
    if(email.length>=21){
        var exp= new RegExp("^[a-z]\.[a-z]+[1-9]*\@studenti.unisa.it");
        if(exp.test(email))     return true;
    }
    return false;
}

function testEmailTutor(){
    var email= $('#inputEmailT').val().toLowerCase();
    if(email.length>=12){
        var exp= new RegExp("^[a-z]\.[a-z]+[1-9]*\@unisa.it");
        if(exp.test(email))     return true;
    }
    return false;
}

function testMatricola(){
    var matricola= $('#inputMatricola').val();
    if(matricola.length>=10){
        var exp= new RegExp("^[0-9]+$");
        if(exp.test(matricola))     return true;
    }
    return false;
}

function testCitta(){
    var citta= $('#inputCity').val();
    if(citta.length>=3){
        var exp= new RegExp("^[A-Za-z\s]*");
        if(exp.test(citta))     return true;
    }
    return false;
}

function testIndirizzo(){
    var indirizzo = $('#inputAddress').val();
    if(indirizzo.length>=3){
        var exp= new RegExp("^[A-Za-z0-9,\s]*");
        if(exp.test(indirizzo))     return true;
    }
    return false;
}

function testCorso(){
    var corso= $('#inputCourse').val();
    if(corso.length>=2){
        var exp= new RegExp("^[A-Za-z\s]*");
        if(exp.test(corso))     return true;
    }
    return false;
}

function testDepartment(){
    var department= $('#inputDepartmentT').val();
    if(department.length>=2){
        var exp=new RegExp("^[A-Za-z0-9\s]*");
        if(exp.test(department))    return true;
    }
    return false;
}

function testPassword(){
    var password= $('#inputPassword').val();
    if(password.length>=8){
        var exp=new RegExp("^[A-Za-z0-9\s]+$");
        if(exp.test(password))  return true;
    }
    return false;
}

function testConfirmPassword(){
    var password= $('#inputPassword').val();
    var confirmPassword= $('#inputConfirmPassword').val();
    if(confirmPassword == password)    return true;
    return false;
}
