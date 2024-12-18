  document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        var dialog= document.getElementById("dialog");
      dialog.style.display="block"
      dialog.showModal(); 
  },4000)
    });
  
  function getValue(){
    dialog.close();
    dialog.style.display="none"
    console.log("Closed API hit");
  }
