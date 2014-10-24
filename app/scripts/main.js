var Admin = function (options) {
 options = options || {};
  this.name = options.name;
  this.health = 100;
  this.avatar = options.avatar;


  this.attack = function (attacker) {
    attacker.health = attacker.health - 10;
  };
  this.special = function (attacker) {
    attacker.health = attacker.health -20;
  };
};


var Teacher = function (options){
  var spec, att;
  options = options || {};
  this.name = options.name;
  this.type = options.type;
  this.health = 100;
  switch (this.type) {
    case "1":
      att = 10;
      spec = 20;
    break;
    case "2":
      att = 15;
      spec = 25;
      break;
    case "3":
      att = 5;
      spec = 30;
    break;
    default:
      break;

  }
  this.attack = function (attacker){
  attacker.health = attacker.health - att;

  };

  this.special = function (attacker) {
  attacker.health = attacker.health - spec;
  };
};



var player1, player2;

$('.fill button').on('click', function (event){
  event.preventDefault();



   player1 = new Teacher({
    name: $(this).text(),
    type: $(this).attr('name'),
    avatar: $(this).html()


  });
$('.fill' ).click(function() {
  $( this ).slideUp();

  $('.name1').prepend(player1.name).find('.n1health').text(player1.health).find('.stageleft img').html(player1.avatar);

});
});


$('.fill2 button').on('click', function (event){
  event.preventDefault();

    player2 = new Admin({
     name: $(this).text(),
     avatar: $(this).html()
    //  type: $(this).attr('name'),
});
$('.fill2' ).click(function() {
  $( this ).slideUp();
  $('.name2').prepend(player2.name).find('.n2health').text(player2.health);
});

$('.modalDialog').hide();




$('.attackbtn').on('click', function (event){
  event.preventDefault();



player1.attack(player2);
$('.n2health').text(player2.health);

player2.attack(player1);
$('.n2health').text(player1.health);

// if (player1.health <= 0 || player2.health <= 0){




});
});
