$(document).ready(function(){
  var man, woman, red, blackbrown, light, short, average, tall, old, young, none, small, big, married, single;
  $('.page1btn').click(function(){
    $('.page').addClass("hide");
    $('.page2').removeClass("hide");
  });
  $('.page2btn').click(function(){
    if ($("input[value='man']").prop("checked")) {
      man = true;
      $('.page').addClass("hide");
      $('.page4').removeClass("hide");
    }else if ($("input[value='woman']").prop("checked")) {
      woman = true;
      $('.page').addClass("hide");
      $('.page3').removeClass("hide");
    }else {
      alert ('Please select an option!')
    }
  })
 $('.page3btn').click(function(){
    if ($("input[value='red']").prop("checked")) {
      red = true;
      $('.page').addClass("hide");
      $('.page7').removeClass("hide");
    }else if ($("input[value='black-brown']").prop("checked")) {
      blackbrown = true;
      $('.page').addClass("hide");
      $('.page4').removeClass("hide");
    }else if ($("input[value='light']").prop("checked")) {
      light = true;
      $('.page').addClass("hide");
      $('.page4').removeClass("hide");
    }else{
      alert ('Please select an option!')
    }
  })
  $('.page4btn').click(function(){
    if ($("input[value='short']").prop("checked")) {
      short = true;
      $('.page').addClass("hide");
      if(woman == true && blackbrown == true){
        alert('arya');
        //finalPage();
      }
      else if (woman == true && red == true && young == true){
        alert('margarey');
        //finalPage();
      }
      else if (woman == true && light == true){
        alert('daenerys');
        //finalPage();
      }
      else if (man == true){
        $('.page7').removeClass("hide");
      }
      else{
        alert ('Please select an option!')
      }
    }else if ($("input[value='average']").prop("checked")) {
      average = true;
      $('.page').addClass("hide");
      if(woman == true && blackbrown == true){
        alert('missandei');
        //finalPage();
      }
      else if (woman == true && light == true){
        alert('cersei');
        //finalPage();
      }
      else if (man == true){
        $('.page8').removeClass("hide");

      }else{
        alert ('Please select an option!')
      }

    }else if ($("input[value='tall']").prop("checked")) {
    tall = true;
      $('.page').addClass("hide");
      if(woman == true && blackbrown == true){
        alert('ellaria');
        //finalPage();
      }
      else if (woman == true && red == true && young == true){
        alert('sansa');
        //finalPage();
      }
      else if (woman == true && light == true){
        alert('brienne');
        //finalPage();
      }
      else if (man == true){
        $('.page8').removeClass("hide");
      }

    }else{
      alert ('Please select an option!')
    }
  })

  $('.page7btn').click(function(){
    if ($("input[value='old']").prop("checked")) {
      old = true;
      $('.page').addClass("hide");
      if(woman == true && red == true){
        $('.page5').removeClass("hide");
      }
      else if (man == true && short == true){
        alert('tyrion');
        //finalPage();
      }
      else if (man == true && average == true && small == true){
        alert('littlefinger');
        //finalPage();
      }
      else if (man == true && tall == true && big == true){
        alert('thormund');
        //finalPage();
      }else{
        alert ('Please select an option!')
      }

    }else if ($("input[value='young']").prop("checked")) {
      young = true;
      $('.page').addClass("hide");
      if(woman == true && red == true){
        $('.page4').removeClass("hide");
      }
      else if (man == true && short == true){
        alert('bran');
        //finalPage();
      }
      else if (man == true && average == true && small == true){
        alert('jonsnow');
        //finalPage();
      }
      else if (man == true && tall == true && big == true){
        alert('khaldrogo');
        //finalPage();
      }else{
        alert ('Please select an option!')
      }
    }else{
      alert ('Please select an option!')
    }
  })

  $('.page5btn').click(function(){
    $('.page').addClass("hide");
    if ($("input[value='married']").prop("checked")) {
      married = true;
      if(woman == true && red == true && old == true){
        alert('catelyn')
        //finalPage();
      }
    }else if ($("input[value='single']").prop("checked")) {
      single = true;
      if(woman == true && red == true && old == true){
        alert ('melissandre');
        //finalPage();
      }
    }else{
      alert ('Please select an option!')
    }
  })

  $('.page8btn').click(function(){
    $('.page').addClass("hide");
    if ($("input[value='none']").prop("checked")) {
      none = true;
      if(man == true && average == true){
        alert('varys');
        //finalPage();
      }
      else if (man == true && tall == true){
        alert('jaime');
        //finalPage();
      }
    }else if ($("input[value='small']").prop("checked")) {
      small = true;
      if(man == true && average == true){
        $(".page7").removeClass("hide");
      }
      else if (man == true && tall == true){
        alert('mountain');
        //finalPage();
      }
    }
    else if ($("input[value='big']").prop("checked")) {
      big = true;
      if (man == true && average == true){
        alert('pycelle');
        //finalPage();
      }
      else if (man == true & tall == true){
        $('.page7').removeClass('hide');
      }
    }
    else{
      alert ('Please select an option!')
    }
  })
});
