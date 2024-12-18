
// function change(){
//      var dropdown = document.getElementById("class");

//      if (dropdown.style.display === "none"){
//           dropdown.style.display = 'block';
//          } else {
//           dropdown.style.display = "none";
//          }
// }

function change(){
     $(document).ready(function(){
         $("#btn1").click(function(){
             $("img").attr("height" , "500")
         });
         
     });
}
function changequeue(){
         $("#btn2").click(function(){
             $("img").hide(1000);
         });
         
     };
     //scroll to top function
document.addEventListener('DOMContentLoaded',()=>{
    $(document).ready(function() {
        // Back to top 
        $('#scrolltop').on('click', function (e) {
            e.preventDefault();
        
            $("html, body").animate({ scrollTop: 0}, 2000);
        });
    });
})  