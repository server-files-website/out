jQuery(document).bind("keyup keydown", function(e){
    var urlindex = "https://yehia-online.000webhostapp.com/Yehia-online.html";
    if(e.ctrlKey && e.keyCode == 85){
alert('Source-Code:Disable');
    }
    
    else     if(e.ctrlKey && e.keyCode == 80){
alert('Print:Disable');
location.replace(urlindex)

    }
        else     if(e.ctrlKey && e.keyCode == 70){
alert('Search is disabled');
location.replace(urlindex)
            
    }
            else     if(e.ctrlKey && e.keyCode == 71){
alert('Search is disabled');
location.replace(urlindex)  
            }
            else     if(e.ctrlKey && e.keyCode == 114){
alert('Search is disabled');
location.replace(urlindex)
            }

    
});
