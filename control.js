class Controller{
  constructor(){
    this.game_frame=document.getElementById("game");
    this.auto_play=true;
    this.play_int=200;
    this.scale=700;
    this.method="fixed";
  }


  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  post_message(msg){
    this.game_frame.contentWindow.postMessage(msg,'*');

  }

   drop_at(x){
     var msg={instruction:'click',x:x,y:350};
     this.post_message(msg);
   }

set_speed(s){
  var msg={instruction:'set_speed',speed:s};
  this.post_message(msg);
}

get_move(method){
  var pos=0;
  if (method=="random"){pos=Math.random();}
  else if( method=="fixed"){}

  return pos*this.scale;
}

async play(){
while (this.auto_play){
  this.drop_at(this.get_move(this.method));
  await this.sleep(this.play_int);
}

}

}
