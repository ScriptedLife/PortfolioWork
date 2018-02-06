alert("hi");
function createRequest(){
    try{
        request = new XMLHttpRequest();
    }
    catch(){
        try{
            request = new ActiveXObject("Msxm12.XMLHTTP");
        }
            catch(){
                try{
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch(failed){
                        request = null;
                        alert("Error creating connection");
                        }
                }
        }
}