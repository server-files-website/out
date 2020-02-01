jQuery(document).bind("keyup keydown", function(e){
    var urlindex = "https://yehia-online.000webhostapp.com/Yehia-online.html";
    if(e.ctrlKey && e.keyCode == 85){
        location.replace(urlindex)
alert('Source-Code:Disable');

    }
    
    else     if(e.ctrlKey && e.keyCode == 80){
location.replace(urlindex)
alert('Print:Disable');

    }
        else     if(e.ctrlKey && e.keyCode == 70){
location.replace(urlindex)
alert('Search is disabled');
            
    }
            else     if(e.ctrlKey && e.keyCode == 71){
location.replace(urlindex)
alert('Search is disabled');
                
            }
            else     if(e.ctrlKey && e.keyCode == 114){
location.replace(urlindex)
alert('Search is disabled');
                
            }

    
});
document.onkeyup = function (Yehia_F_key) {
  if (Yehia_F_key.which == 83) {
$(&quot;document&quot;).ready(function() {
    setTimeout(function() {
        $(&quot;#search_auto&quot;)[0].click();
    },10);
});  }
  
   else if (Yehia_F_key.which == 68) {
$(&quot;document&quot;).ready(function() {
    setTimeout(function() {
        $(&quot;.dntoggle&quot;)[0].click();
    },10);
});  } 
   else if (Yehia_F_key.which == 84) {
$(&quot;document&quot;).ready(function() {
    setTimeout(function() {
        $(&quot;.img&quot;)[0].click();
    },10);
});  } 
  
     else if (Yehia_F_key.which == 77) {
$(&quot;document&quot;).ready(function() {
    setTimeout(function() {
        $(&quot;#yehia_morep&quot;)[0].click();
    },10);
});  } 





     else if (Yehia_F_key.which == 89) {

profile_u = &quot;https://www.yehia.online/p/profile.html&quot;;
window.open(profile_u);

 } 

  




};
