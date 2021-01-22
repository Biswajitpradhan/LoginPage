var uname=document.getElementById("user");
var pass=document.getElementById("pass");
var first=document.getElementById("first")
var second=document.getElementById("last");
var email=document.getElementById("email");
var number=document.getElementById("number");
var aadhar=document.getElementById("aadhar");
var pan=document.getElementById("pan");
var age=document.getElementById("age");
var address=document.getElementById("address");

function validate()
{
    if((uname.Value.trim()=="")||(pass.Value.trim()==""))
        {
        alert("blank value not allowed.");
        return false;
        }
    else if(pass.Value.trim().length>6)
    {
        return("password is too large.");
        return false;
    }
    else{
        return true;
    }
}