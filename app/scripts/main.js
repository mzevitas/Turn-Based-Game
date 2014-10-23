


$("#btn_class").click(function() {
var player1 = $("#p1name").val();
var player2 = $("#p2name").val();
if (validation()) // Calling validation function.
{
$(".form_class").submit(); // Form Submission.
alert(" Name : " + player1 + " \n Email : " + player2 + " \n Form class : " + $(".form_class").attr('class') + "\n\n Form is Submitted Successfully......");
}
});

$("#btn_tag").click(function() {
var player1 = $("#p1name").val();
var player2 = $("#p2name").val();
if (validation()) // Calling validation function.
{
$("form").submit(); // Form submission.
alert(" Name : " + player1 + " \n Email : " + player2 + " \n Tag : form\n\n Form Submitted Successfully......");
}
});

// Name and Email validation Function.
function validation() {
var player1 = $("#p1name").val();
var player2 = $("#p2name").val();

}


$("#p1search").html( '.name1' );
$("#p2search").html( '.name2' );



// var player= {
//   name: '',
//   health: 100,
// };
//
// var enemy = {
//   name: '',
//   health: 100
// };
