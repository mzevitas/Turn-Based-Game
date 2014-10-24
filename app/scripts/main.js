var Admin = function (options) {

  this.name = options.name;
  this.health = 100;
  switch (this.type) {
    case ".tim":
      att = 10;
      spec = 20;
    break;
    case ".james":
      att = 15;
      spec = 25;
      break;
    case ".jo":
      att = 5;
      spec = 30;
    break;

  }
  this.attack = function (attacker) {
    attacker.health = attacker.health - 10;
  };
  this.special = function (attacker) {
    attacker.health = attacker.health -20;
  };
};


var Teacher = function (options){

  options = options || {};
  this.name = options.name;
  this.type = options.type;
  this.health = 100;
  switch (this.type) {
    case ".sarah":
      att = 10;
      spec = 20;
    break;
    case ".john":
      att = 15;
      spec = 25;
      break;
    case ".linda":
      att = 5;
      spec = 30;
    break;

  }

  this.attack = function (attacker){

  attacker.health = attacker.health - 10;

  };

  this.special = function (attacker) {
  attacker.health = attacker.health -20;
  };
};


//Starting the game



$('.fill .fill2 button').on('click', function (event){
  event.preventDefault();



  var player1 = new Teacher({
    name: $(this).text(),
    type: $(this).attr('name'),

  });
//Create an Instance of my Bad guy
   var player2 = new Admin({
     name: $(this).text(),
     type: $(this).attr('name'),
});

     //set player/monster names
     $('.name1').prepend(player1.name).find('.name1health').text(player1.health);
     $('.name2').prepend(player2.name).find('.name2health').text(player2.health);

     $('.fight').fadeIn;
   });



//winner is not random, and helth drops below 0;

$('#fight').on('click', function (event){
  event.preventDefault();

//GoodGuy will attach BadGuy
//BadGuy health will decrease
player1.attack(player2);
$('.name2health').text(player2.health);

//BadGuy will retaliate;
//GoodGuy health will decrease
player2.attack(player1);
$('.name2health').text(player1.health);

if (player1.health <= 0 || player2.health <= 0){

}

});
