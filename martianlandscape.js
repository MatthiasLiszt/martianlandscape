
function martianlandscape(screens,pixelSize){
 var landingSite=Math.floor(Math.random()*screens);
 var Screen=[];
 
 for(var curScreen=0;curScreen<screens;++curScreen)   
  {if(curScreen!=landingSite)
    {
    }
   else
    {
    }
  }
  
}

function makeMountain(size,screenSize)
 {var curSize;
  var x,y,p1x,p2x,p1y,p2y;
  var plusY;
 
  console.log("executing makeMountain");
  switch(size){
   case 'small':
    curSize=screenSize/3;
    plusY=screenSize/2;
    break; 
   case 'medium':
    curSize=screenSize/2;
    break;  
   case 'large':
    curSize=screenSize;
    break;  
  }
  x=Math.round(curSize/2);
  curSize=Math.round(curSize);
  p1x=Math.round(Math.random()*x);
  p1y=Math.round(Math.random()*curSize);
  p2x=p1x+Math.round(Math.random()*x);
  p2y=Math.round(Math.random()*curSize); 
  
  var code="<path stroke='black' d='M 0 300 l "+p1x+" "+p1y+" l "+p2x+" "+p2y+" l "+curSize+" 300' />";
  return code;
 }

function makeFlatLand(color,size,screenSize)
 {
 } 