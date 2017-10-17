
function martianlandscape(screens,pixelSize){
 var landingSite=Math.floor(Math.random()*screens);
 var Screen=[];
 
 for(var curScreen=0;curScreen<screens;++curScreen)   
  {if(curScreen!=landingSite)
    {var landType=Math.floor(Math.random()*5);

      
    }
   else
    {
    }
  }
  
}

function makeMountain(size,screenSize,offset)
 {var curSize;
  var x,y,p1x,p2x,p1y,p2y;
  var plusY;
  var of=0;
 
  console.log("executing makeMountain");
  switch(size){
   case 'small':
    curSize=screenSize/3;
    plusY=screenSize/2;
    of=curSize*offset; 
    break; 
   case 'medium':
    curSize=screenSize/2.3;
    plusY=screenSize/2;
    of=curSize*offset;
    break;  
   case 'large':
    curSize=screenSize;
    plusY=screenSize/4;
    of=curSize*offset;
    break;  
  }
  x=Math.round(curSize/2);
  curSize=Math.round(curSize);
  p1x=Math.round(of+Math.random()*x);
  p1y=(Math.round(Math.random()*curSize))%160+plusY;
  p2x=p1x+Math.round(Math.random()*x);
  p2y=(Math.round(Math.random()*curSize))%160+plusY;  
   
  
  var code="<path stroke='none' fill='brown' d='M "+of+" 300 L "+p1x+" "+p1y+" L "+p2x+" "+p2y+" L "+(curSize+of)+" 300' />";
  console.log(code);
  return code;
 }

function makeFlatLand(color,size,screenSize,offset)
 {var curSize;
  //var x,y,p1x,p2x,p1y,p2y;
  var plusY=160;
  var of=0;

  console.log("executing makeFlatLand");
  switch(size){
  case 'small': curSize=screenSize/3;
                plusY=screenSize/2;
                of=curSize*offset;
                break;
   case 'medium':
                 curSize=screenSize/2;
                 plusY=screenSize/2;
                 of=curSize*offset;
                 break;  
   case 'large':
                curSize=screenSize;
                plusY=screenSize/2;
                of=curSize*offset;   
    break;
  }

  var code="<path stroke-width='5' stroke='"+color+"' d='M "+of+" 300 L "+(curSize+of)+" 300' />";
  console.log(code);
  return code;
 } 