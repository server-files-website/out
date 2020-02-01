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
