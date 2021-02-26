/*
wait,why in hell are you here
this is top secret
piss of,kid
go to hell
even hell is better with the better nether mod
*/

function bahahaha(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }