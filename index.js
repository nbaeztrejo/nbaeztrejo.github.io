
      $(document).ready(function() {
        $('.input-group').keydown(function(event) {
            if (event.keyCode == 13) {
                func();
                return false;
             }
        });
      });
    
     function func() {
        var str = document.getElementById("srch-term").value;
        
        switch(str){
            case "Resume":
                 open("https://drive.google.com/file/d/0B5efxm6TN8KCYmxRR2Y2U0NYRG8/view?usp=sharing");
                 break;
            case "GitHub":
                 open("http://www.github.com/nbaeztrejo");
                 break;
            default:
                 document.getElementById("srch-term").placeholder = "Inavlid Search Term";
            }
        
         }