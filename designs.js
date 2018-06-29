
var h, w, c //variable declaration
$('#sizePicker').submit(function() {
event.preventDefault();
h = $( "#inputHeight").val();// Select size input
w = $( "#inputWeight").val();// Select size input
makeGrid(h,w);
});
// When size is submitted by the user, call makeGrid()
function makeGrid(h,w) {
$('tr').remove();
for (let i=1;i<=h;i++)
{
     $('#pixelCanvas').append('<tr class=tlrow'+i+'></tr>');
for (let j=1;j<=w;j++)
   {
 			$('.tlrow'+i).append('<td></td>');
    }
}
//coloring the cells accordingly---nested function
 $('td').click(function addColor(){
   c = $( '#colorPicker').val();// Select color input
     if ($(this).attr('style'))
      {
         $(this).removeAttr('style');
       }
      else
      {
         $(this).attr('style', 'background-color:' + c);
     }
 })

}
