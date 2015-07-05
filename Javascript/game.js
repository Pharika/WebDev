function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        
        var clickedTime; var createdTime; var reactionTime;
        
     
        function makeBox() {
            
            var time = Math.random();
            time = 5000*time;
    
           setTimeout(function() {
               if(Math.random()>0.5) {
                    document.getElementById("box").style.borderRadius="100px";
               } else {
                   document.getElementById("box").style.borderRadius="0";
               }
               var top = Math.random();
               top=top*400;
               var left = Math.random();
               left=left*1200;
               var wid = Math.random();
               wid = wid *200;
               var hei = Math.random();
               hei = hei * 200;
               document.getElementById("box").style.width=wid+"px";
               document.getElementById("box").style.height=hei+"px";
               document.getElementById("box").style.top=top+"px";
               document.getElementById("box").style.left=left+"px";
               document.getElementById("box").style.backgroundColor= getRandomColor();
               document.getElementById("box").style.display = "block";
               createdTime = Date.now();
            }, time);
        }
       document.getElementById("box").onclick = function() {
           // document.getElementById("box").style.display = "none";
           clickedTime = Date.now();
           reactionTime = (clickedTime - createdTime)/1000;
           document.getElementById("time").innerHTML=reactionTime;
           this.style.display = "none";
           makeBox();
       }
       makeBox();
       
       