/* global document, alert, jQuery, $, window*/
jQuery(document).ready(function()
{
    "use strict";
    $('#slidr-curoredsel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
                items:1,
                duration:500,
                pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                    min:1,
                    max:1,
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
    });
    $(window).scroll(function(){
        
        var top = $(window).scrollTop();
        if(top >= 60)
            {
                $("header").addClass('secondary');
            }
        else if($("header").hasClass('secondary'))
            {
                $("header").removeClass('secondary');
            }
        
    });
});
$('.login-popu').click(function(){
                        
        $('.login-popup').fadeIn();
                        
});


/*$('.login-popup').click(function (){
        
    $(this).fadeOut();
});*/


$('login-popup .inner-log').click(function (e){
        
    e.stopPropagation();
});

$('login-popup .btnCancel').click(function (e){
        
    e.preventDefault();
    
    $(this).fadeOut();
});

$(document).keydown(function(e)
                   {
    
    if(e.keyCode == 27)
        {
            $('.login-popup').fadeOut();
        }
});
function validation()
{
    var usrname = document.forms["logForm"]["email"];
    
    var passwd = document.forms["logForm"]["psw"];
    
    if(passwd.value.length < 6 || passwd.value.length > 12)
        {
            alert("password can't exceed 12 chars or be less than 6");
            
            return false;
        }
    var TestString = usrname.value.slice(0,1);
    
    if(TestString == "@" || TestString == "_" || TestString.match(/[0-9]/) != null)
        {
            alert("Not Valid");
            
            return false;
        }
    
  

}
$('.define-style').click(function(){
                        
        $('.Style-popup').fadeIn();
        //alert('dss');
                        
});

/*$(document).ready(function(){
 $('.define-style').click(function(){ 
    $('.Style-popup').fadeIn();  
    
});
});*/


/*$('.login-popup').click(function (){
        
    $(this).fadeOut();
});*/


$('Style-popup .InnerStyle-popup').click(function (e){
        
    e.stopPropagation();
});

$('Style-popup .btnCancel').click(function (e){
        
    e.preventDefault();
    
    $(this).fadeOut();
});

function changeImage()
{
    var img = document.getElementById('fashion-header');
    img.src = "shop_men.jpg";
    return false;
}
function changeImage2()
{
    var img = document.getElementById('fashion-header');
    img.src = "yyy.jpg";
    return false;
}


