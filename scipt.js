"use strict"

var active = document.querySelector('.nav-active');
var hover = document.querySelectorAll('.nav-element');


function funcover(){
    active.style.opacity = 1;
}

function funcout(){
    active.style.opacity = 0.4;
}

for (let i = 0; i < hover.length; i++) {
    const element = hover[i];
    element.addEventListener('mouseover', funcover);
    
    
}

for (let i = 0; i < hover.length; i++) {
    const element = hover[i];
    element.addEventListener('mouseout', funcout);
    
    
}

$(document).ready(function(){
    dowidth();
    $(window).resize(function(){
       dowidth();
    });
    function dowidth(){
        var width = document.documentElement.clientWidth;
        var height = document.body.clientHeight;
        var home = document.querySelector('.home');        
        
        if(width>=2561){
            if(height>=2160){                
                home.style.height = '2160px';
                console.log('2160');
                             
            }
        }

        if(width<=2561){
            if(height>=1440){                
                home.style.height = '1440px';
            }
        }

        if(height<=1440){
            home.style.height = '100vh';
        }

        if(width>=2561){
            if(height<=2160){               
                home.style.height = '100vh';
            }
        }



    }
});