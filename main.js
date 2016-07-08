var url = 'https://api.foursquare.com/v2/venues/search?client_id=2IBMUH4WJ0UVFRSQIM3ELIIOXK2RJT4WNF1RDWQAQO2ZOUO5&client_secret=2VATYFFF0ABCSC5CKTQJNZOZU3BF2L1GSTMMKDWEP1D1HMK4&v=20130815&ll=40.7,-74&query='+$('#location').val();

$.getJSON(url, function (data) {
    console.log(data.response.venues[0]);
});
$('#submit').click(function(){
     var entry=$("#location").val();
     $("#content").append("<p>"+ url + "</p>")
             $("#location").val("");
         $('#content').animate({
               scrollTop:$('#content').get(0).scrollHeight},'absolute'
          );

    });




// $(document).ready(
//   function() {
//       var url = 'https://api.foursquare.com/v2/venues/search?client_id=2IBMUH4WJ0UVFRSQIM3ELIIOXK2RJT4WNF1RDWQAQO2ZOUO5&client_secret=2VATYFFF0ABCSC5CKTQJNZOZU3BF2L1GSTMMKDWEP1D1HMK4&v=20130815&ll=40.7,-74&query=sushi'
//     $.get( url, function(data) {
//         console.log();
//         console.log(response);
//         $('#random').attr('src', response.data.images.fixed_width_downsampled.url);
//       }
//     );
//   }
// );

 
// $("#location").keydown(function(w){
// var x=w.which;
// var userText=$("#location").val
// if(x === 13){
//       $("#content").append("<p>"+ userText+"</p>");
//           $("#location").val("");
//           $('#content').animate({
//               scrollTop:$('#content').get(0).scrollHeight},'absolute'
//           );
// }
// });

$('.result').append("<div class='data'>"
                
                
                +"<h1>"+data.response.venues[i].name+"</h1>"
                
                +"Website: <a>"+data.response.venues[0].url+"</a>"
                +"<p>location: "+data.response.venues[0].location.address+", "+data.response.venues[0].location.city+" "+data.response.venues[0].location.country+"</p>"
                +"</div>");

