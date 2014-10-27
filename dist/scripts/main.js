var Admin = function (options) {
 options = options || {};
  this.name = options.name;
  this.health = 100;
  this.type = options.type;
  this.avatar = options.avatar;


  this.attack = function (attacker) {
    attacker.health = attacker.health - _.random(0, 10);
  };
  this.special = function (attacker) {
    attacker.health = attacker.health - _.random(7, 15);
  };
};


var Teacher = function (options){
  var img;
  options = options || {};
  this.name = options.name;
  this.avatar = options.avatar;
  this.health = 100;


  this.attack = function (attacker){
  attacker.health = attacker.health - _.random(0, 10);

  };

  this.special = function (attacker) {
  attacker.health = attacker.health - _.random(7,15);
  };
};




var player1, player2;

$('.fill button').on('click', function (event){
  event.preventDefault();



   player1 = new Teacher({
    name: $(this).text(),
    type: $(this).attr('name'),
    avatar: $(this).attr('img')


  });
$('.fill' ).click(function() {
  $( this ).slideUp();

  $('.name1').prepend(player1.name).find('.n1health').text(player1.health);

$('.stageleft img').prepend(player1.avatar);


});
});


$('.fill2 button').on('click', function (event){
  event.preventDefault();

    player2 = new Admin({
     name: $(this).text(),
     avatar: $(this).attr('img')

});
$('.fill2' ).click(function() {
  $( this ).slideUp();
  $('.name2').prepend(player2.name).find('.n2health').text(player2.health);

$('.stageright img').prepend(player2.avatar);

});

$('.modalDialog').hide();


// Fight Scene

$('.attackbtn').on('click', function (event){
  event.preventDefault();



player1.attack(player2);
$('.n2health').text(player2.health);

player2.attack(player1);
$('.n1health').text(player1.health);

if (player1.health <= 0 || player2.health <= 0);







});
});
