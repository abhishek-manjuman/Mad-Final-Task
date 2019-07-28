$(document).ready(function(){
        
  $('#navBtn').click(function(){
          $("#mySidenav").css({
            'width': '300px',
            'padding':'60px 10px 0px 10px'
          });
          $("main").css({'opacity':'0.3'});
        });

        $('#closeBtn').click(function(){
          $("#mySidenav").css({
            'width':'0',
            'padding':'0',
          });
          $("main").css({'opacity':'1'});
        });

      $('#head_search').popover({
        placement: 'bottom',
        title: 'Search',
        html:true,
        trigger: 'click',
        content:  $('#myForm').html()

      });

    $('#close').click(function(){
      clearData();
    });

    $('#phoneNumber').keypress(function(event){ 
      $('.perror').remove();      
      var a = event.which;
      if(a < 48 || a > 57)
      {
        $('#phoneNumber').after('<span class="perror">Enter only number</span>');
      }else if($(this).val().length < 9 || $(this).val().length > 10)
      {
        $('#phoneNumber').after('<span class="perror">Please enter valid mobile number. Length(10)</span>');
      }else if($(this).val().length == 10){
        $('.perror').remove();
      }
    });

    $('#pin').keypress(function(event){ 
      $('.pinerror').remove();      
      var a = event.which;
      if(a < 48 || a > 57)
      {
        $('#pin').after('<span class="pinerror">Enter only number</span>');
      }else if($(this).val().length < 5 || $(this).val().length > 6)
      {
        $('#pin').after('<span class="pinerror">Please enter valid Pin Code. Length(6)</span>');
      }else if($(this).val().length == 6){
        $('.pinerror').remove();
      }
    });
    var count = 0;
    $('#fname').keypress(function(event){
      count= count+1; 
      if(count >3){
        $('.ferror').remove();
        count = 0; 
      }
    });
    $('#lname').keypress(function(event){
      count= count+1; 
      if(count >3){
        $('.lerror').remove(); 
      }
    });


    $('#btn-submit').click(function(){
      var fname = $('#fname').val();
      var lname = $('#lname').val();
      var email = $('#email').val();
      var phoneNumber = $('#phoneNumber').val();
      var contary = $('#contary option:selected').val();
      var state = $('#state option:selected').val();
      var city = $('#city option:selected').val();
      var pin = $('#pin').val();
      var address = $('#address').val();
      // $(this).attr("data-dismiss","modal");
      $('.error').remove();
      $('.ferror').remove();
      $('.lerror').remove();
      $('.perror').remove();
      $('.pinerror').remove();
      var count = 0;

      if(fname.length == 0){
        count = count+1;
        $('#fname').after('<span class="ferror">Please enter your first name</span>');
      }else if(fname.length < 3){
        count = count+1;
        $('#fname').after('<span class="ferror">First name contain at list 3 cheracter</span>');
      }
      if(lname.length == 0){
        count = count+1;
        $('#lname').after('<span class="lerror">Please enter your last name</span>');
      }else if(lname.length < 3){
        count = count+1;
        $('#lname').after('<span class="lerror">Last name contain at list 3 cheracter</span>');
      }
      if(email.length == 0){
        count = count+1;
        $('#email').after('<span class="error">Please enter your Email address.</span>');
      }else if(!validateEmail(email)){
        count = count+1;
        $('#email').after('<span class="error">Please enter correct email address.</span>');
      }
      if(phoneNumber.length == 0){
        count = count+1;
        $('#phoneNumber').after('<span class="perror">Please enter your Mobile  number.</span>');
      }else if(phoneNumber.length != 10){
        count = count+1;
        $('#phoneNumber').after('<span class="perror">Please enter valid Mobile  number.</span>');
      }
      if(contary == ""){
        count = count+1;
        $('#contary').after('<span class="perror">Please select your Nationalty.</span>');
      }
      if(state == ""){
        count = count+1;
        $('#state').after('<span class="perror">Please select your State.</span>');
      }
      if(city == ""){
        count = count+1;
        $('#city').after('<span class="perror">Please select your City.</span>');
      }
      if(pin.length == 0){
        count = count+1;
        $('#pin').after('<span class="pinerror">Please enter your Pin Code.</span>');
      }else if(pin.length != 6){
        count = count+1;
        $('#pin').after('<span class="pinerror">Please enter valid Pin Code.</span>');
      }
      if(address.length == 0){
        count = count+1;
        $('#address').after('<span class="error">Please enter your Full Address</span>');
      }else if(address.length < 3){
        count = count+1;
        $('#address').after('<span class="error">Address contain at list 3 cheracter</span>');
      }

      if(count == 0 ){
        var name = fname+" "+lname;
        var addr = address+", "+city+", "+pin+", "+state+", "+contary;
        $("#tbody").append("<tr><td>"+name+"</td><td>"+email+"</td><td>"+phoneNumber+"</td><td>"+addr+"</td></tr>");
        $('#no-list').css({'display':'none'});
        $('.table').css({'display':'block'});
        clearData();
        $(this).attr("data-dismiss","modal");
      }else{
        $('.table').css({'display':'none'});
        $('#no-list').css({'display':'block'});
      }
      });

      function validateEmail(email) {
        var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        return emailReg.test( email );
      }

      function clearData(){
        $('#fname').val("");
        $('#lname').val("");
        $('#email').val("");
        $('#phoneNumber').val("");
        $('#contary').val("");
        $('#state').val("");
        $('#city').val("");
        $('#pin').val("");
        $('#address').val("");
  
        $('.error').remove();
        $('.perror').remove();
        $('.pinerror').remove();
        $('.ferror').remove();
        $('.lerror').remove();
      }
});